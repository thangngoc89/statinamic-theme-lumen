import React, { Component } from "react"
import Link from "statinamic/lib/Link"
import "./style.sss"

export default class SidebarNav extends Component {
  render() {
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link to="/" activeClassName="current">Articles</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="current">About</Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="current">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
