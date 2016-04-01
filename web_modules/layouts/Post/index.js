import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import Time from "../../components/Time"
import GoHomeButton from "../../components/GoHomeButton"
import styles from "./styles.css"

export default class Post extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
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

    const { config } = pkg

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

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />
        <GoHomeButton text="All Articles" />
        <div className={ styles.wrapper }>
          <div className={ styles.text }>
            <h1>{ head.title }</h1>
            <div dangerouslySetInnerHTML={ { __html: body } } />
            <p className={ styles.datePublished }>
              { "Published " }
              <Time time={ head.date } format="D MMM YYYY" />
            </p>
          </div>
          <div className={ styles.footer }>
            {/* <ReadNext post={ post } {...this.props}/> */}
            <hr />
            <p>
              { config.siteDescr }
              <a href={ config.twitter }>
                <br /><strong>{ config.authorName }</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
