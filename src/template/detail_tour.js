// Gatsby supports TypeScript natively!
import React from "react"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import BackgroundImage from 'gatsby-background-image'
import SingleHeader from "../components/SingleHeader"
// import { ReadMoreAndLess } from 'react-read-more-less';
// import ViewMoreText from 'react-native-view-more-text';
// import ShowMoreText from 'react-show-more-text';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Header from "../components/Header"


export default ({ data, pageContext }) => {


    const post = data.markdownRemark;
    const htmlContent = { __html: post.html };
    const prev = pageContext.prev
        ? {
            url: `/${pageContext.prev.fields.slug}`,
            title: pageContext.prev.frontmatter.title
        }
        : null

    const next = pageContext.next
        ? {
            url: `/${pageContext.next.fields.slug}`,
            title: pageContext.next.frontmatter.title
        }
        : null

    return (
        <ModalRoutingContext.Consumer>

            {({ modal, closeTo }) => (
                <div>
                    {modal ? (
                        <Link to={closeTo} className="focus:outline-none">
                            <div className="flex justify-end items-center text-xl text-gray-800 border-transparent">
                                <button type="button border-transparent">✖</button>
                            </div>
                        </Link>

                    ) : (

                        <header>
                            <Header className={`bg-gray-800`} />
                        </header>
                    )}

                    <SEO title="Jelajahi Sumedang - Virtual Tourism"
                    />


                    <div className="p-0 sm:p-10 mt-4 sm:mt-0">
                        <div className="w-full px-4 lg:max-w-full lg:flex">
                            <BackgroundImage
                                Tag="section"
                                className={`w-full sm:w-96 sm:h-96 h-60 flex-none bg-cover rounded-lg overflow-hidden sm:mb-4`}
                                // style={{
                                //     backgroundPosition: "center",
                                //     backgroundRepeat: "no-repeat",
                                //     backgroundSize: "cover",
                                //     minHeight: "100vh",
                                //     width: "100%",
                                // }}
                                fluid={post.frontmatter.thumbnailImage.childImageSharp.fluid}
                            >
                            </BackgroundImage>


                            <div className="rounded-b lg:rounded-b-none lg:rounded-r sm:mt-5 mt-0 sm:px-5 px-0 sm:pl-10 flex flex-col justify-between leading-normal mb-8">

                                <div className="text-gray-900 font-bold text-xl mb-2">
                                    {post.frontmatter.title}
                                </div>

                                <div
                                    className="blog-post-content"
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />

                                <br /><br />


                                <a href={post.frontmatter.url} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-gray-100 rounded-full py-2 px-5 shadow-lg focus:outline-none focus:shadow-outline text-center">
                                    Jelajahi Sekarang </a>
                            </div>
                        </div>

                        <div className="w-full mt-8">
                            <div className="w-full mx-auto flex justify-center flex-wrap items-center sm:justify-between">
                                <div className="order-1 md-order-1">
                                    <Link to="/">Kembali</Link>
                                </div>

                                <div className="order-2 md:order-2 flex items-center">
                                    {prev && (
                                        <Link to={prev.url}>
                                            <button className="bg-grey hover:bg-grey-dark py-2 px-4 shadow -mr-1">Sebelumnya</button>

                                        </Link>
                                    )}
                                    {next && (
                                        <Link to={next.url}>
                                            <button className="bg-grey hover:bg-grey-dark py-2 px-4 rounded-r rounded-lg shadow">Selanjutnya</button>
                                        </Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </ModalRoutingContext.Consumer >
    );
};



export const query = graphql`
query WisataBySlug2($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
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
    }
}
`;

