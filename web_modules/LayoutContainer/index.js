/* eslint-disable max-len */
import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import "./reset.css"
import "./typography.css"
import "./highlight.css"
import "./blog.sss"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    return (
      <div>
        <Helmet
          link={ [
            {
              "rel": "stylesheet",
              "href": "https://fonts.googleapis.com/css?family=Roboto:700|Raleway:600,700|PT+Sans:400,400italic,700,700italic",
            },
          ] }
          meta={ [
            { property: "og:site_name", content: config.siteTitle },
            { name: "twitter:site", content: config.twitter },
          ] }
        />
        <div className="wrapper">
          { this.props.children }
        </div>
      </div>
    )
  }
}
