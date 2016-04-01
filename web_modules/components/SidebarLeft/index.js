import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
import SidebarNav from "../SidebarNav"
import Avatar from "./avatar.jpg"
import Social from "../SidebarSocial"
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

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <header>
            <Link
              style={ {
                textDecoration: "none",
                borderBottom: "none",
                outline: "none",
              } }
              to="/"
            >
              <img src={ Avatar } width="75" height="75" />
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
          <SidebarNav />
          <footer>
            <Social />
            <p className="copyright">&copy; All rights reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default SidebarLeft
