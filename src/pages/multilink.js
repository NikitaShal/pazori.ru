import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image';

import "../css/multilink.css"

import SEO from "../components/seo"
import logo from '../images/logo-pazori.svg'

const ML = props => (
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

			</div>
    </div>
)

export default ML

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
