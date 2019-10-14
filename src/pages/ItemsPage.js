import React, { Component } from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";

import * as queries from "../graphql/queries";

class CollectionsPage extends Component {
  render() {
    const ListView = ({ collection }) => (
      <div>
        <h3>Collections List</h3>
        <ul>
          {
            <li key={collection.id}>
              <img src={collection.thumbnail_path} alt={collection.title} />
              {collection.title}
            </li>
          }
        </ul>
      </div>
    );

    return (
      <div>
        <Connect
          query={graphqlOperation(queries.getCollection, {
            id: "1c5216df-ad4b-4ddb-9299-5692c986f7e3"
          })}
        >
          {({ data: { getCollection }, loading, errors }) => {
            if (!(errors === undefined || errors.length === 0))
              return <h3>Error</h3>;
            if (loading || !getCollection) return <h3>Loading...</h3>;
            console.log(getCollection);
            return <ListView collection={getCollection} />;
          }}
        </Connect>
      </div>
    );
  }
}

export default CollectionsPage;
