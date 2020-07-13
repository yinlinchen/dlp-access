import React, { Component } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import PermissionsPage from "../pages/PermissionsPage";
import AdditionalPages from "../pages/AdditionalPages";

const pageComponents = {
  AboutPage: AboutPage,
  PermissionsPage: PermissionsPage,
  AdditionalPages: AdditionalPages
};

class CustomPageRoutes extends Component {
  route(key, path, PageComponent) {
    return (
      <Route
        key={key}
        path={path}
        exact
        render={props => (
          <PageComponent siteDetails={this.props.siteDetails} key={key} />
        )}
      />
    );
  }

  buildRoutes() {
    let routes = [];
    for (const [key, obj] of Object.entries(
      this.props.siteDetails.siteNavLinks
    )) {
      const pageComponent = pageComponents[obj.component];
      routes.push(this.route(key, obj.local_url, pageComponent));
      if (obj.children) {
        console.log(obj.children);
      }
    }
    return routes;
  }

  render() {
    let customRoutes = [];
    if (this.props.siteDetails) {
      customRoutes = this.buildRoutes();
    }
    return customRoutes;
  }
}

export default CustomPageRoutes;
