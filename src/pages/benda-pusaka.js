// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <div>
      <Header className={`bg-gray-800`} />
      <section id="hero" className="mt-4 py-10 bg-gray-50 dark:bg-custom min-h-screen">
        <div className="container mx-auto px-8 sm:px-16">
          <h2 className="lg:text-3xl font-semibold text-center text-gray-800">Koleksi Benda Museum</h2>
          <p className="text-center text-lg text-gray-800">Koleksi Benda Museum Keraton Sumedang Larang</p>


          <div className="grid md:grid-cols-3 gap-7 mt-12">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Link to={node.fields.slug}>
                <div className="card bg-gray-50 dark:bg-gray-800">
                  {node.frontmatter.thumbnailImage &&
                    <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="w-full h-64 sm:h-64 object-cover rounded-md" />
                  }
                  <div className="my-2">
                    <h3 className="text-gray-800 font-bold leading-tight text-xl myhover">
                      {node.frontmatter.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div >
  </Layout >
)


export const query = graphql`
 {
    allMarkdownRemark (filter: {frontmatter: {key: {eq: "pusaka"}}}, sort: {fields: frontmatter___title, order: ASC}){
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

