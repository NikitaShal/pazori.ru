import React from "react"

import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import "../css/multilink.css"

import logo from '../images/logo-pazori.svg'
import vk from '../images/vk.svg'
import inst from '../images/inst.svg'
import wa from '../images/whatsapp.svg'
import tg from '../images/telegram.svg'
import mir from '../images/madeinrussia.svg'

const IndexPage = props => (
  <Layout>
	<div className="container">

	    <SEO title="Одежда и аксессуары из Мурманска" />

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
      <div className="kostyl">

	    <div className="header">
	    	<div  style={{ maxWidth: `160px` }}>
		      <img className="logo" src={logo} alt="логотип pazori" />
		    </div>
		    <p className="brand-description">одежда и <br/> 
		    аксессуары из <br/> Мурманска</p>
		    <div className="brand-line" />
			</div>

			<div className="catalog">

      <div className="card-container">
        <Card image={props.data.pic1.childImageSharp.fluid} />
        <Card image={props.data.pic2.childImageSharp.fluid}  />
        <Card image={props.data.pic3.childImageSharp.fluid} />
        <Card image={props.data.pic4.childImageSharp.fluid}
        />
      </div>
  {/*
				<div className="grid">

						<div className="item">
							<Img fluid={props.data.productOne.childImageSharp.fluid} />
						</div>
						<div className="item">
							<Img className="" fluid={props.data.productTwo.childImageSharp.fluid} />
						</div>

				</div>
*/}
			</div>

			<a href="https://vk.com/market-196667887" target="_blank" rel="noreferrer"><button className="allcatalog_button"> </button></a>

			<div className="about-company-text">
				Мы - самое северное швейное производство <br/><br/>
				Следим за качеством и даём гарантию на всю продукцию <br/><br/>
				Исполнили уже более 50 заказов для компаний по Мурманску и области <br/><br/>
				Можем с нуля разработать мерч (брендированная одежда компании) с индивидуальным дизайном <br/><br/>
			</div>

			<div className="social-buttons">
				<p>Для лайков/сотрудничества/хейта:</p>
				<div className="grid" style={{ width: `80%`, margin: `18px auto 0px auto` }}>
					<div className="item" style={{ maxWidth: `40px` }}><a href="https://vk.com/pazori_north" target="_blank" rel="noreferrer"><img src={vk} alt="ссылка на страницу vk"/></a></div>
					<div className="item" style={{ maxWidth: `40px` }}><a href="https://www.instagram.com/pazori_north/" target="_blank" rel="noreferrer"><img src={inst} alt="ссылка на страницу instagram"/></a></div>
					<div className="item" style={{ maxWidth: `40px` }}><a href="https://wa.me/79113458640" target="_blank" rel="noreferrer"><img src={wa} alt="ссылка на чат whatsapp"/></a></div>
					<div className="item" style={{ maxWidth: `40px` }}><a href="https://t.me/nikitashal" target="_blank" rel="noreferrer"><img src={tg} alt="ссылка на чат telegram"/></a></div>
				</div>
			</div>


			<div className="footer">
					<a href="tel:89113458640"><button className="call_button">ЗВОНОК</button></a>
					<a href = "mailto: info@pazori.ru"><button className="mail_button">ПОЧТА</button></a>

					{/*<button className="merchbutton">МЕРЧ</button>
					<button className="optombutton">ОПТОМ</button>*/}

					<div className="madeinrussia">
						<img src={mir} alt="Made in Russia"/>
					</div>
								<div className="footerimg">
				<Img fluid={props.data.hiddenimage.childImageSharp.fluid} alt="Северное  сияние 
(устар. «па́зори») — свечение (люминесценция) верхних слоёв атмосфер планет, обладающих магнитосферой, вследствие их взаимодействия с заряженными частицами солнечного ветра."/>
			</div>
			</div>

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
          ...GatsbyImageSharpFluid
        }
      }
    }
    productTwo: file(relativePath: { eq: "black.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 330, quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pic1: file(relativePath: { eq: "IMG_1986.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500, quality: 85) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    pic2: file(relativePath: { eq: "IMG_5459.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500, quality: 85) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    pic3: file(relativePath: { eq: "IMG_5251.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500, quality: 85) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    pic4: file(relativePath: { eq: "DSC01485-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500, quality: 85) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hiddenimage: file(relativePath: { eq: "hiddenFooter.png" }) {
      childImageSharp {
        fluid(maxWidth: 3180, maxHeight: 1179, quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
