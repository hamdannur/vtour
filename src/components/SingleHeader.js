import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"

const SectionHero = () => {
  const data = useStaticQuery(
    graphql`
      query {
       
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

  // Set ImageData.
  const imageLeft = data.imgLeft.childImageSharp.fluid
  const imageRight = data.imgRight.childImageSharp.fluid

  return (
    <div>

      <div className="w-full py-4 bg-gray-800">
        <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py">
          <div className="order-1 md-order-1">
            <Link to="/">
              <Img fluid={imageLeft} className="w-28 sm:w-60" />
            </Link>
          </div>


          <div className="order-2 md:order-3 flex items-center">

            <Img fluid={imageRight} className="w-28 sm:w-48" />
          </div>
        </div>
      </div>
    </div>

  )
}


export default SectionHero
