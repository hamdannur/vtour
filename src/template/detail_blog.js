// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export default ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const prev = pageContext.prev
        ? {
            url: `/blog/${pageContext.prev.fields.slug}`,
            title: pageContext.prev.frontmatter.title
        }
        : null

    const next = pageContext.next
        ? {
            url: `/blog/${pageContext.next.fields.slug}`,
            title: pageContext.next.frontmatter.title
        }
        : null

    const htmlContent = { __html: post.html };
    return (
        <Layout>
            <SEO title="Blog" />
            <div>
                <div className="row">
                    <div className="container w-full md:max-w-3xl mx-auto py-20  dark:text-gray-50 text-gray-800">
                        <div className="w-full px-4 md:px-6 text-xl leading-normal">
                            <div className="font-sans">
                                <p className="text-base md:text-sm font-bold">
                                    <Link to={`/blog`}>Kembali</Link>
                                </p>
                                <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
                                    {post.frontmatter.title}
                                </h1>
                                <p className="text-sm md:text-base font-normal text-gray-600">
                                    Published  {post.frontmatter.date}
                                </p>
                            </div>
                            <div className="text-md mt-8">
                                <div dangerouslySetInnerHTML={htmlContent} className="markdown" />
                            </div>

                            <div className="sm:grid grid-cols-4 gap-5 mx-auto">
                                <div className="col-start-1 col-end-3 my-2">

                                    {prev && (
                                        <Link to={prev.url}>
                                            <div className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-2 border-yellow-500 shadow-md">
                                                <h3 className="mb-3 font-semibold inline-flex text-gray-800 dark:text-gray-100">
                                                    <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z" fill="currentColor" /></svg>
                                                    Sebelumnya
                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-100">{prev.title}</p>
                                            </div>
                                        </Link>
                                    )}

                                </div>
                                <div className="col-end-5 col-span-2 my-2">
                                    {next && (
                                        <Link to={next.url}>
                                            <div className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-2 border-yellow-500 shadow-md text-right">
                                                <h3 className="mb-3 font-semibold inline-flex text-gray-800 dark:text-gray-100">
                                                    Berikutnya
                                                    <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>

                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-100">{next.title}</p>
                                            </div>
                                        </Link>
                                    )}
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </Layout >
    );
};


export const query = graphql`
query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
        }
    }
}
`;
