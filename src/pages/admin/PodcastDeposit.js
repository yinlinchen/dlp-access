import React, { Component } from "react";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { Form } from "semantic-ui-react";
import { updatedDiff } from "deep-object-diff";
import { API, Auth, Storage } from "aws-amplify";
import { getPodcastCollections, mintNOID } from "../../lib/fetchTools";
import * as mutations from "../../graphql/mutations";
import FileUploadField from "./FileUploadField";
import { v4 as uuidv4 } from "uuid";

import "../../css/adminForms.scss";

const initialFormState = {
  selectedCollectionID: null,
  title: "",
  description: "",
  thumbnail_path: "",
  manifest_url: "",
  owner_email: "",
  owner_name: "",
  source_link: "",
  source_text: "",
  publication_date: "",
  explicit: false,
  visibility: true
};

class PodcastDeposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: initialFormState,
      prevFormState: initialFormState,
      viewState: "edit",
      collections: null,
      valid_email: true,
      archive: {}
    };
  }

  async loadCollections() {
    const collections = await getPodcastCollections();
    if (collections) {
      const stateObj = { formState: {} };
      stateObj["collections"] = collections;
      stateObj.formState["selectedCollectionID"] = collections[0].id;
      this.setState(stateObj);
    }
  }

  getCollectionById(id) {
    let selected = null;
    for (const i in this.state.collections) {
      if (this.state.collections[i].id === id) {
        selected = this.state.collections[i];
      }
    }
    return selected;
  }

  getFolderByName(name) {
    let folder = "";
    switch (name) {
      case "manifest_url":
        folder = "audio";
        break;
      case "audioTranscript":
        folder = "text";
        break;
      case "thumbnail_path":
        folder = "image";
        break;
      default:
        break;
    }
    return folder;
  }

  getFileUrl(name, value) {
    const bucket = Storage._config.AWSS3.bucket;
    const folder = this.getFolderByName(name);
    const pathPrefix = `public/sitecontent/${folder}/${process.env.REACT_APP_REP_TYPE.toLowerCase()}/`;
    return `https://${bucket}.s3.amazonaws.com/${pathPrefix}${value}`;
  }

  updateInputValue = event => {
    const { name, type } = event.target;
    let value = type === "checkbox" ? event.target.checked : event.target.value;

    if (type === "upload") {
      value = this.getFileUrl(name, value);
    }

    let attributes = JSON.parse(JSON.stringify(this.state.formState));
    attributes[name] = value;

    this.setState({ formState: attributes });
  };

  sourceLinkFormatted(link, text) {
    return [`<a href="${link}">${text}</a>.`];
  }

  publicationDateFormatted(publication_date) {
    return publication_date
      ? `${publication_date.replaceAll("-", "/")} 00:00:00`
      : null;
  }

  handleSubmit = async () => {
    const id = uuidv4();

    const noid = await mintNOID();
    const customKeyPrefix = "ark:/53696";
    const customKey = `${customKeyPrefix}/${noid}`;

    const selectedCollection = this.getCollectionById(
      this.state.formState.selectedCollectionID
    );

    const modifiedPubDate = this.publicationDateFormatted(
      this.state.formState.publication_date
    );

    let archive = {
      id: id,
      title: this.state.formState.title,
      identifier: id,
      description: this.state.formState.description,
      creator: [selectedCollection.title],
      source: this.sourceLinkFormatted(
        this.state.formState.source_link,
        this.state.formState.source_text
      ),
      language: ["en"],
      custom_key: customKey,
      parent_collection: [selectedCollection.id],
      item_category: "podcasts",
      visibility: true,
      thumbnail_path: this.state.formState.thumbnail_path,
      manifest_url: this.state.formState.manifest_url,
      heirarchy_path: [selectedCollection.heirarchy_path],
      explicit: this.state.formState.explicit,
      create_date: modifiedPubDate,
      modified_date: modifiedPubDate
    };

    await API.graphql({
      query: mutations.createArchive,
      variables: { input: archive },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    });

    this.setState({
      archive: archive,
      viewState: "view"
    });

    const newData = updatedDiff(this.state.prevFormState, this.state.formState);
    const oldData = updatedDiff(this.state.formState, this.state.prevFormState);
    const eventInfo = Object.keys(newData).reduce((acc, key) => {
      return {
        ...acc,
        [key]: {
          old: oldData[key],
          new: newData[key]
        }
      };
    }, {});
    const userInfo = await Auth.currentUserPoolUser();
    let historyInfo = {
      groups: userInfo.signInUserSession.accessToken.payload["cognito:groups"],
      userEmail: userInfo.attributes.email,
      event: JSON.stringify(eventInfo)
    };

    await API.graphql({
      query: mutations.createHistory,
      variables: { input: historyInfo },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    });
  };

  handleChange = (e, { value }) => {
    this.setState({ viewState: value });
  };

  validateEmail = event => {
    const { value } = event.target;
    let valid = true;
    const re = /^[^\s@]+@[^\s@]+$/;
    if (!re.test(value)) {
      valid = false;
    }
    this.setState({ valid_email: valid });
  };

  newPodcastForm = () => {
    return (
      <div>
        <h2>Upload New Podcast Episode</h2>
        <Form>
          <section className="podcast-metadata">
            <h3>Episode Metadata</h3>
            <label>
              Podcast Collection:
              <select
                id="selectedCollectionID"
                name="selectedCollectionID"
                value={this.state.formState.selectedCollectionID}
                onChange={this.updateInputValue}
              >
                {this.state.collections.map(collection => (
                  <option key={collection.id} value={collection.id}>
                    {collection.title}
                  </option>
                ))}
              </select>
            </label>
            <Form.Input
              label="Episode title"
              name="title"
              placeholder="Enter episode title"
              onChange={this.updateInputValue}
            />
            <Form.TextArea
              label="Episode description"
              name="description"
              placeholder="Enter episode description"
              onChange={this.updateInputValue}
            />
            <Form.Input
              label="Source Link"
              name="source_link"
              placeholder="Enter source link"
              onChange={this.updateInputValue}
            />
            <Form.Input
              label="Source Text"
              name="source_text"
              placeholder="Enter source text"
              onChange={this.updateInputValue}
            />
            <div class="field">
              <label htmlFor="publication_date">Publication date:</label>
              <div class="ui input">
                <input
                  type="date"
                  id="publication_date"
                  name="publication_date"
                  onChange={this.updateInputValue}
                ></input>
              </div>
            </div>
            <div class="field explicit-checkbox">
              <label htmlFor="publication_date">
                Explicit:
                <input
                  id="explicit-checkbox"
                  type="checkbox"
                  onChange={this.updateInputValue}
                  key="explicit"
                  name="explicit"
                  checked={this.state.formState.explicit}
                />
              </label>
            </div>
            <div class="field visibility-checkbox">
              <label htmlFor="visibility">
                Visibility:
                <input
                  id="visibility-checkbox"
                  type="checkbox"
                  onChange={this.updateInputValue}
                  key="visibility"
                  name="visibility"
                  checked={this.state.formState.visibility}
                />
              </label>
            </div>
          </section>
          <section className="file-uploads">
            <h3>Episode files</h3>
            <FileUploadField
              label="Audio file (required)"
              input_id="manifest_url_upload"
              name="manifest_url"
              placeholder="Audio file"
              setSrc={this.updateInputValue}
              fileType="audio"
            />
            <FileUploadField
              label="Audio transcript (optional)"
              input_id="audio_transcript_upload"
              name="audioTranscript"
              placeholder="Audio transcript"
              setSrc={this.updateInputValue}
              fileType="text"
            />
            <FileUploadField
              label="Episode image (optional)"
              input_id="thumbnail_path_upload"
              name="thumbnail_path"
              placeholder="Episode image"
              setSrc={this.updateInputValue}
              fileType="image"
            />
          </section>
        </Form>
        <button className="submit" onClick={this.handleSubmit}>
          Submit Podcast Episode
        </button>
      </div>
    );
  };

  view = () => {
    if (this.state.archive) {
      return (
        <div className="view-section">
          <div>
            <h3>Podcast entry successfully created</h3>
            {Object.keys(this.state.archive).map(key => (
              <div key={key}>
                <span id={`${key}_key`}>{key}:</span>{" "}
                <span id={`${key}_value`}>
                  {this.state.archive[key]
                    ? this.state.archive[key].toString()
                    : "null"}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Error creating archive</div>;
    }
  };

  componentDidMount() {
    this.loadCollections();
  }

  render() {
    let content = <></>;
    if (this.state.collections) {
      content = (
        <div>
          <div className="col-lg-9 col-sm-12 admin-content">
            <Form>
              <Form.Group inline>
                <label>Current mode:</label>
                <Form.Radio
                  label="Edit"
                  name="viewRadioGroup"
                  value="edit"
                  checked={this.state.viewState === "edit"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="View"
                  name="viewRadioGroup"
                  value="view"
                  checked={this.state.viewState === "view"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
            {this.state.viewState === "edit"
              ? this.newPodcastForm()
              : this.view()}
          </div>
          <div class="signout-wrapper">
            <AmplifySignOut />
          </div>
        </div>
      );
    }
    return content;
  }
}

export default withAuthenticator(PodcastDeposit);
