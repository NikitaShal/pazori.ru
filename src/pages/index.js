import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import logo from '../images/logo.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" />
    <p>одежда и аксессуары из Мурманска</p>
    <Link to="/multilink/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
