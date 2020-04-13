export function getHTML(copyObj, component) {
  let copy = null;
  try {
    if (copyObj.type === "string") {
      copy = copyObj.value;
    } else if (copyObj.type === "file") {
      const copyLink = `${process.env.REACT_APP_CONFIG_PATH}/${copyObj.value}`;
      fetchCopyHTML(copyLink, component);
    }
  } catch (error) {
    console.error("Error setting copy for component");
  }
  if (copy !== null) {
    component.setState({ copy: copy });
  }
}

const fetchCopyHTML = async (htmlLink, component) => {
  let response = null;
  let data = null;

  try {
    response = await fetch(htmlLink);
    data = await response.text();
  } catch (error) {
    console.error(
      `Error fetching html for ${component.constructor.name} component`
    );
    console.error(error);
  }
  if (data !== null) {
    component.setState({ copy: data });
  }
};

export const fetchLanguages = async (component, key, callback) => {
  if (component.state.languages === null) {
    let response = null;
    let data = null;

    try {
      const htmlLink = `${process.env.REACT_APP_CONFIG_PATH}/language_codes_by_${key}.json`;
      response = await fetch(htmlLink);
      data = await response.json();
    } catch (error) {
      console.error(`Error fetching languages`);
      console.error(error);
    }
    if (data !== null) {
      component.setState({ languages: data }, function() {
        if (typeof component.loadItems === "function") {
          component.loadItems();
        }
      });
    }
  }
};