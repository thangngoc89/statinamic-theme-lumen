import React, { Component, PropTypes } from "react"
import styles from "./style.css"

export default class SidebarSocial extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    const twitter = config.twitter
    const vk = config.vk
    const rss = config.rss
    const email = config.email
    const github = config.github
    const telegram = config.telegram

    return (
      <div className={ styles.wrapper }>
        <ul>
          <li><a href={ twitter }><i className="fa fa-twitter"></i></a></li>
          <li><a href={ github }><i className="fa fa-github-alt"></i></a></li>
          <li><a href={ vk }><i className="fa fa-vk"></i></a></li>
        </ul>
        <ul>
          <li><a href={ email }><i className="fa fa-envelope-o"></i></a></li>
          <li>
            <a href={ telegram }><i className="fa fa-paper-plane"></i></a>
          </li>
        </ul>
        <ul>
          <li><a href={ rss }><i className="fa fa-rss"></i></a></li>
        </ul>
      </div>
    )
  }
}
