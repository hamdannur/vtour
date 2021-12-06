import React from "react"
import SectionHero from "../components/SectionHero"
import ListTour from "../components/ListTour"
import { graphql, useStaticQuery } from "gatsby"
import { Element, Link } from "react-scroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"

// import { Helmet } from "react-helmet"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          
        }
      }
  allMarkdownRemark(filter: { frontmatter: { key: { eq: "wisata" } } }, sort: {fields: frontmatter___title, order: ASC}) {
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          url
          thumbnailImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        html
      }
    }
  }
}
    `
  )
  return (


    <Layout>


      <SEO
        title="Jelajahi Sumedang - Virtual Tourism"
        description="Jelajahi Sumedang - Virtual Tourism"
        lang="id"
      />

      <Element name="section-one">
        <SectionHero>
          <h5 className="text-lg text-gray-50">Selamat Datang di</h5>
          <h1 className="font-bold px-10 text-center text-6xl sm:text-8xl text-gray-100 mt-4 font-adulsa tracking-wider">
            Het Paradijs Van Java
          </h1>

          <Link
            activeclassName="active"
            to="section-two"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button className="mx-auto bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mt-10">
              Mulai Jelajahi
            </button>
          </Link>

        </SectionHero>
      </Element>





      <Element name="section-two">
        <section className="bg-white py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            {/* <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Title
            </h1> */}
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="container my-12 mx-auto px-4 md:px-12">
              <ListTour tours={allMarkdownRemark.edges} />
            </div>

          </div>
        </section>

      </Element>
      <Footer />


    </Layout>

  )



}


export default IndexPage
