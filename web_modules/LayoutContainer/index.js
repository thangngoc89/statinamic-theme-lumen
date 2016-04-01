/* eslint-disable max-len */
import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import "./global/global.styles"
import styles from "./styles.css"

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
            {
              "rel": "stylesheet",
              "href": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
            },
          ] }
          meta={ [
            { property: "og:site_name", content: config.siteTitle },
            { name: "twitter:site", content: `@${  config.twitter }` },
          ] }
        />
        <div className={ styles.wrapper }>
          { this.props.children }
        </div>
      </div>
    )
  }
}
