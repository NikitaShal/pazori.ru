import React from "react"
import { Link } from "gatsby"

import "../css/multilink.css"

import SEO from "../components/seo"
import logo from '../images/logo-pazori.svg'

const ML = () => (
	<div>
    <SEO title="Привет" />
    <div class="header">
    	<div style={{ maxWidth: `100px` }}>
	      <img src={logo} />
	    </div>
	    <p class="description">одежда и аксессуары из Мурманска</p>
	    <div class="brand-line"></div>
	</div>
	<br></br>
    <Link to="/">Go back to the homepage</Link>
    </div>
)

export default ML
