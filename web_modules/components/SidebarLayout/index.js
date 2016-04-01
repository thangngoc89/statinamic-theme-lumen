import React, { Component, PropTypes } from "react"
import SidebarLeft from "../SidebarLeft"
import styles from "./styles.css"

export default class SidebarLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <SidebarLeft />
        <div className={ styles.wrapper }>
          <main className={ styles.inner }>
            { this.props.children }
          </main>
        </div>
      </div>
    )
  }
}
