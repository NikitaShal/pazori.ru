import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';

import "../css/multilink.css"
import 'swiper/swiper.scss';

import SEO from "../components/seo"
import logo from '../images/logo-pazori.svg'
import ProductWhite from '../images/white.png'
import ProductBlack from '../images/black.png'

const ML = () => (
	<div class="container">

	    <SEO title="Привет" />

	    <div class="header">
	    	<div style={{ maxWidth: `100px` }}>
		      <img src={logo} />
		    </div>
		    <p class="description">одежда и аксессуары из Мурманска</p>
		    <div class="brand-line"></div>
			</div>

			<div class="catalog">
		    <Swiper
		      spaceBetween={50}
		      slidesPerView={2}
		    >
		      <SwiperSlide style={{ maxWidth: `100px` }}><img src={ProductWhite} /></SwiperSlide>
		      <SwiperSlide style={{ maxWidth: `100px` }}><img src={ProductBlack} /></SwiperSlide>
		      <SwiperSlide><img src={ProductWhite} /></SwiperSlide>
		      <SwiperSlide><img src={ProductBlack} /></SwiperSlide>
		    </Swiper>
			</div>

			<div class="footer">

			</div>
    </div>
)

export default ML
