import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
// import BlogNav from "../BlogNav"
// import BlogSocial from "../BlogSocial"
import "./style.sss"

class SidebarLeft extends React.Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    const header = (
      <header>
        <Link
          style={ {
            textDecoration: "none",
            borderBottom: "none",
            outline: "none",
          } }
          to="/"
        >
          <img src="./images/photo9.jpg" width="75" height="75" />
        </Link>
        <h1>
          <Link
            style={ {
              textDecoration: "none",
              borderBottom: "none",
              color: "inherit",
            } }
            to={ "/" }
          >
            { config.siteTitle }
          </Link>
        </h1>
        <p>
          { config.siteDescr }
        </p>
      </header>
    )

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="blog-details">
            { header }
          </div>
          <div className="blog-options">
            { /*
            <BlogNav {...this.props}/>
            <footer>
              <BlogSocial {...this.props}/>
              <p className="copyright">
                { "&copy; All rights reserved." }
              </p>
            </footer>
            */ }
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarLeft
