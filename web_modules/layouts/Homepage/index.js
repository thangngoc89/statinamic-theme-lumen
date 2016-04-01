import React, { Component, PropTypes } from "react"
import Link from "statinamic/lib/Link"
import SidebarLeft from "../../components/SidebarLeft"
import Time from "../../components/Time"
import enhanceCollection from "statinamic/lib/enhance-collection"
import Helmet from "react-helmet"

import "./style.sss"

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    const pageLinks = enhanceCollection(this.context.collection, {
      filter: (t) => (t.layout === "Post"),
      sort: "date",
      reverse: true,
    }).map((post) => (
      <div
        key={ post.__url }
        className="blog-post"
      >
        <Time format="MMMM YYYY" time={ post.date } />
        <span style={ { padding: "5px" } } />
        <span className="blog-category">{ post.category }</span>
        <h2>
          <Link
            style={ { borderBottom: "none" } }
            to={ post.__url }
          >
            { post.title }
          </Link>
        </h2>
        <p>{ post.description }</p>
        <Link
          className="readmore"
          to={ post.__url }
        >
          { "Read" }
        </Link>
      </div>
    ))

    return (
      <div>
        <Helmet title={ config.siteTitle } />
        <SidebarLeft {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              { pageLinks }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
