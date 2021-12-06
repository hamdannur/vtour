// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from "gatsby-image"

export default ({ data }) => (
    <Layout>
        <SEO title="Blog" />

        <div>
            <section id="hero" className="mt-4 py-10 bg-gray-50 dark:bg-custom min-h-screen">
                <div className="container mx-auto px-8 sm:px-16">
                    <h2 className="lg:text-3xl font-semibold text-center text-gray-800 dark:text-gray-50">Blog</h2>
                    <p className="text-center text-lg text-gray-800 dark:text-gray-50">Baca artikel yang sesuai dengan minat kamu</p>


                    <div className="grid md:grid-cols-3 gap-7 mt-12">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div className="card bg-gray-50 dark:bg-gray-800">


                                {node.frontmatter.thumbnailImage &&
                                    <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="w-full h-48 sm:h-48 object-cover" />
                                }

                                <div className="m-4">

                                    <Link to={node.fields.slug}>
                                        <h3 className="text-gray-800 font-semibold text-lg leading-normal dark:text-gray-50 myhover px-1">
                                            {node.frontmatter.title}
                                        </h3>
                                    </Link>
                                    {/* <p>
                    {node.excerpt}
                  </p> */}
                                </div>
                            </div>
                        ))}

                    </div>






                </div>
            </section>
        </div>

    </Layout >
)


export const query = graphql`
 {
    allMarkdownRemark (filter: {frontmatter: {key: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: ASC}){
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            date
            title 
            thumbnailImage {
            id
            childImageSharp {
                     fluid {
      ...GatsbyImageSharpFluid_withWebp
    }
                  }
          }
          }
          excerpt
        }
      }
    }
  }
  `;

