import React from "react"
import { Link } from "gatsby"
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'gatsby-image';

import "../css/multilink.css"

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import SEO from "../components/seo"
import logo from '../images/logo-pazori.svg'
import ProductWhite from '../images/white.png'
import ProductBlack from '../images/black.png'

SwiperCore.use([Pagination]);

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

			<div class="catalog">
		    <Swiper
		      spaceBetween={10}
		      slidesPerView={2}
      		pagination={{ clickable: true }}
		    >
		      <SwiperSlide style={{marginLeft: `20px`}}><Img fluid={props.data.productOne.childImageSharp.fluid}
		      									alt="Худи с брендингом pazori" /></SwiperSlide>
		      <SwiperSlide><Img fluid={props.data.productTwo.childImageSharp.fluid}
		      									alt="Худи с брендингом pazori" /></SwiperSlide>
		      <SwiperSlide><img src={ProductWhite} /></SwiperSlide>
		      <SwiperSlide><img src={ProductBlack} /></SwiperSlide>
		    </Swiper>
		    <div class="swiper-pagination"></div>
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
