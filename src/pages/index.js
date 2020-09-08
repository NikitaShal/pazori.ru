import React from "react"
import { Link } from "gatsby"

import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/multilink.css"

import logo from '../images/logo-pazori.svg'

const IndexPage = props => (
  <Layout>
	<div class="container">

	    <SEO title="Привет" />

	    {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}

	    <div class="header">
	    	<div style={{ maxWidth: `100px` }}>
		      <img src={logo} />
		    </div>
		    <p class="description">одежда и аксессуары из Мурманска</p>
		    <div class="brand-line"></div>
			</div>

			<div class="grid">

					<div class="item">
						<Img fluid={props.data.productOne.childImageSharp.fluid} />
					</div>
					<div class="item">
						<Img class="" fluid={props.data.productTwo.childImageSharp.fluid} />
					</div>

			</div>

			<div class="footer">
					<button class="optombuttom">ЗВОНОК</button>
					<button class="optombuttom">ПОЧТА</button>

					<button class="merchbutton">МЕРЧ</button>
					<button class="optombuttom">ОПТОМ</button>
			</div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    productOne: file(relativePath: { eq: "white.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 330, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    productTwo: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 330, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
