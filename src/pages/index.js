import React from "react"
import { Link } from "gatsby"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/multilink.css"

import logo from '../images/logo-pazori.svg'
import vk from '../images/vk.svg'
import inst from '../images/inst.svg'
import wa from '../images/whatsapp.svg'
import tg from '../images/telegram.svg'
import mir from '../images/madeinrussia.svg'

const IndexPage = props => (
  <Layout>
	<div class="container">

	    <SEO title="Привет" />

	    {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}

{/*
			<ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
*/}
      <div class="kostyl">

	    <div class="header">
	    	<div  style={{ maxWidth: `160px` }}>
		      <img class="logo" src={logo} />
		    </div>
		    <p class="brand-description">одежда и <br/> 
		    аксессуары из <br/> Мурманска</p>
		    <div class="brand-line"></div>
			</div>

			<div class="catalog">
				<div class="grid">

						<div class="item">
							<Img fluid={props.data.productOne.childImageSharp.fluid} />
						</div>
						<div class="item">
							<Img class="" fluid={props.data.productTwo.childImageSharp.fluid} />
						</div>

				</div>

				<a href="https://vk.com/market-196667887" target="_blank"><button class="allcatalog_button"></button></a>
			</div>

			<div class="about-company-text">
				Мы - самое северное швейное производство. 
				Следим за качеством и даём гарантию на всю продукцию.
				Исполнили уже более 50 заказов для компаний по Мурманску и области. 
				Можем с нуля разработать мерч(брендированная одежда компании) с индивидуальным дизайном. 
			</div>

			<div class="social-buttons">
				<p>Для лайков/сотрудничества/хейта:</p>
				<div class="grid" style={{ width: `80%`, margin: `18px auto 0px auto` }}>
					<div class="item" style={{ maxWidth: `40px` }}><a href="https://vk.com/pazori_north" target="_blank"><img src={vk} /></a></div>
					<div class="item" style={{ maxWidth: `40px` }}><a href="https://www.instagram.com/pazori_north/" target="_blank"><img src={inst} /></a></div>
					<div class="item" style={{ maxWidth: `40px` }}><a href="https://wa.me/79113458640" target="_blank"><img src={wa} /></a></div>
					<div class="item" style={{ maxWidth: `40px` }}><a href="https://t.me/nikitashal" target="_blank"><img src={tg} /></a></div>
				</div>
			</div>


			<div class="footer">
					<a href="tel:89113458640"><button class="call_button">ЗВОНОК</button></a>
					<a href = "mailto: info@pazori.ru"><button class="mail_button">ПОЧТА</button></a>

					{/*<button class="merchbutton">МЕРЧ</button>
					<button class="optombutton">ОПТОМ</button>*/}

					<div class="madeinrussia">
						<img src={mir} />
					</div>
			</div>

			</div>

			<div class="footerimg">
				<Img fluid={props.data.hiddenimage.childImageSharp.fluid} />
			</div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    productOne: file(relativePath: { eq: "white.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 330, quality: 95) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    productTwo: file(relativePath: { eq: "black.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 330, quality: 95) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hiddenimage: file(relativePath: { eq: "vkHeader.png" }) {
      childImageSharp {
        fluid(maxWidth: 673, maxHeight: 253, quality: 95) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
