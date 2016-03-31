import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
import moment from "moment"
import access from "safe-access"
import SidebarLeft from "../../components/SidebarLeft"
import enhanceCollection from "statinamic/lib/enhance-collection"
import Helmet from "react-helmet"

class BlogIndex extends React.Component {
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
    }).map((post) => {
      const title = access(post, "title") || post.__url
      const description = access(post, "description")
      const datePublished = access(post, "date")
      const category = access(post, "category")

      return (
        <div className="blog-post">
          <time dateTime={ moment(datePublished).format("MMMM D, YYYY") }>
            { moment(datePublished).format("MMMM YYYY") }
          </time>
          <span style={ { padding: "5px" } } />
          <span className="blog-category">
            { category }
          </span>
          <h2>
            <Link
              style={ { borderBottom: "none" } }
              to={ post.__url }
            >
              { title }
            </Link>
          </h2>
          <p dangerouslySetInnerHTML={ { __html: description } } />
          <Link
            className="readmore"
            to={ post.__url }
          >
            { "Read" }
          </Link>
        </div>
      )
    })

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

export default BlogIndex
