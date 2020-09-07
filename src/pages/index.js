import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import logo from '../images/logo.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Image} />
    </div>
    <p>одежда и аксессуары из Мурманска</p>
    <Link to="/multilink/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
