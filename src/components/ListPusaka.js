import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import { graphql } from "gatsby";
const ListTour = ({ tours }) => (

    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {tours && tours.map(({ node }) => {

            let tour = node.frontmatter

            return (

                <div class="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 mb-5">

                    <div className="xtooltip transition delay-700 duration-300 ease-in-out">
                        {/* <a href={tour.url} target="_blank" rel="noreferrer" className="text-gray-100 hover:shadow-xl hover:underline"> */}
                        <Link to={node.fields.slug}>
                            <BackgroundImage
                                Tag="section"
                                className={`w-full h-96 rounded-lg overflow-hidden hover:shadow-lg transition duration-500`}
                                // style={{
                                //     backgroundPosition: "center",
                                //     backgroundRepeat: "no-repeat",
                                //     backgroundSize: "cover",
                                //     minHeight: "100vh",
                                //     width: "100%",
                                // }}
                                fluid={tour.thumbnailImage.childImageSharp.fluid}
                            >

                                <div class="flex items-end w-full h-full">
                                    <div class="px-4 py-2 bg">
                                        <div class="font-bold leading-tight text-2xl text-gray-100 hover:text-gray-100">
                                            {tour.title}
                                        </div>
                                    </div>
                                </div>

                            </BackgroundImage>
                        </Link>


                    </div>

                </div>

            )

        })}
    </div>

)

export default ListTour
