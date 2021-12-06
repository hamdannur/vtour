import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Header from "../components/Header"

const SectionHero = ({ children, className }) => {
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

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  const imageLeft = data.imgLeft.childImageSharp.fluid
  const imageRight = data.imgRight.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={`bg-gray-700`}
      fluid={imageData}
      // backgroundColor={`#040e18`}
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
      }}
    >


      {/* <div className="w-full pt-5">
        <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <div className="order-1 md-order-1">
            <Img fluid={imageLeft} className="w-28 sm:w-60" />
          </div>


          <div className="order-2 md:order-3 flex items-center">
            <Img fluid={imageRight} className="w-28 mr-4 sm:w-48" />
          </div>


        </div>
        <Menu pageWrapId={"page-wrap"} />

      </div> */}

      <Header className={`bg-transparent`} />


      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        {children}
      </div>


    </BackgroundImage >
  )
}


export default SectionHero
