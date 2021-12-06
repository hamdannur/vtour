import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "stephen-walker-1533496-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
    )

    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            // className="h-full"
            className={className}
            fluid={imageData}
        // backgroundColor={`#040e18`}
        // style={{
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     minHeight: "100vh",
        //     width: "100%",
        // }}
        >
            <div className="absolute inset-0 bg-black opacity-50 h-full flex flex-col p-72 z-30">

                <h1 className="font-bold text-center text-6xl mt-4 text-yellow-500 opacity-100">HOT PARADISE VAN JAVA</h1>

                <button className="mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Mulai Telusuri
</button>


            </div>

        </BackgroundImage>
    )
}


export default BackgroundSection