import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"

import SidebarLayout from "../../components/SidebarLayout"
import styles from "./style.css"

export default class Page extends Component {

  static propTypes = {
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    const {
      __filename,
      __url,
      head,
      body,
    } = this.props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: head.title },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: head.title },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <SidebarLayout>
        <Helmet
          title={ head.title }
          meta={ meta }
        />
        <div className={ styles.wrapper }>
          <div className={ styles.inner }>
            <h1>{ head.title }</h1>
            <div dangerouslySetInnerHTML={ { __html: body } } />
          </div>
        </div>
      </SidebarLayout>
    )
  }
}
