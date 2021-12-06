import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "./Menu"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

function Header({ siteTitle, className }) {

  const data = useStaticQuery(
    graphql`
          query {
            desktop: file(relativePath: { eq: "2341ab09-8b8e-4a8e-8ae8-e035bf286cee.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }, 
    
    
            imgLeft: file(relativePath: { eq: "logo_v.png" }) {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            },
    
            imgRight: file(relativePath: { eq: "thoughtful_indonesia_white.png" }) {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            },
    
           
          }
        `
  )

  const imageLeft = data.imgLeft.childImageSharp.fluid
  const imageRight = data.imgRight.childImageSharp.fluid

  return (


    <nav className={`py-8 sm:px-24 transition-all duration-300 ${className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">

              <Link
                to={`/`}
                href="#responsive-header"
                className="block mr-4 text-xl lg:inline-block lg:mt-0 dark:text-gray-50 text-gray-50"
              >
                {/* {siteTitle} */}
                <Img fluid={imageLeft} className="w-28 sm:w-48" />
              </Link>
            </div>

          </div>
          <div className="sm:ml-6 sm:block">

            <div className="flex space-x-4">
              <Link
                to={`/`}
                href="#responsive-header"
                className="block mr-4 text-xl lg:inline-block lg:mt-0 dark:text-gray-50 text-gray-50"
              >
                {/* {siteTitle} */}
                <Img fluid={imageRight} className="w-28 sm:w-48" />
              </Link>
              <Menu pageWrapId={"page-wrap"} />

            </div>
          </div>
        </div>


      </div>

    </nav >

  )
}

export default Header
