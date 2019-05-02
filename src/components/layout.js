import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Navigation from './navigation';
import Landing from './landing';
import Speakers from './speakers';
import Tickets from './tickets';
import Schedule from './schedule';
import Sponsors from './sponsors';

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>DinosaurJS</title>
          <link rel="canonical" href="http://dinosaurjs.org" />
        </Helmet>
        <Navigation />
        <Landing/>
        <Speakers />
        <Tickets/>
        <Schedule />
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
