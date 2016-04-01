import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
import SidebarNav from "../SidebarNav"
import Avatar from "./avatar.jpg"
import Social from "../SidebarSocial"
import styles from "./style.css"

class SidebarLeft extends React.Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    return (
      <div className={ styles.wrapper }>
        <div className={ styles.inner }>
          <header>
            <Link className={ styles.siteLogo } to="/">
              <img src={ Avatar } width="75" height="75" />
            </Link>
            <h1>
              <Link className={ styles.siteTitle } to={ "/" }>
                { config.siteTitle }
              </Link>
            </h1>
            <p>{ config.siteDescr }</p>
          </header>
          <SidebarNav />
          <footer>
            <Social />
            <p className={ styles.copyright }>&copy; All rights reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default SidebarLeft
