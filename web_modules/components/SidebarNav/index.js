import React, { Component } from "react"
import Link from "statinamic/lib/Link"
import styles from "./style.css"

const navList = [
  {
    to: "/",
    name: "Articles",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/contact",
    name: "Contact",
  },
]

export default class SidebarNav extends Component {
  render() {
    return (
      <nav className={ styles.wrapper }>
        <ul>
          {
            navList.map((item) => (
              <li key={ item.to }>
                <Link
                  to={ item.to }
                  className={ styles.link }
                  activeClassName={ styles.linkActive }
                >
                  { item.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}
