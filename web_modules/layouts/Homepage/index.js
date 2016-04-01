import React, { Component, PropTypes } from "react"
import Link from "statinamic/lib/Link"
import Time from "../../components/Time"
import enhanceCollection from "statinamic/lib/enhance-collection"
import Helmet from "react-helmet"
import SidebarLayout from "../../components/SidebarLayout"

import styles from "./style.css"

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
        className={ styles.postEntry }
      >
        <Time
          format="MMMM YYYY"
          time={ post.date }
          className={ styles.time }
        />
        <span style={ { padding: "5px" } } />
        <span className={ styles.category }>{ post.category }</span>
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
          className={ styles.readmore }
          to={ post.__url }
        >
          { "Read" }
        </Link>
      </div>
    ))

    return (
      <SidebarLayout>
        <Helmet title={ config.siteTitle } />
        { pageLinks }
      </SidebarLayout>
    )
  }
}
