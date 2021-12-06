const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        actions.createNodeField({
            node,
            name: 'slug',
            value: fileNode.name.toLowerCase()
        });
    }
}



module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const templateFile = path.resolve('./src/template/detail_tour.js');

    const res = await graphql(`
   query {
        allMarkdownRemark (sort: {fields: frontmatter___title, order: ASC}){
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              
                
              }
            }
          }
        }
      }
    `)


    const posts = res.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
        const prev = index === 0 ? null : posts[index - 1].node;
        const next = index === posts.length - 1 ? null : posts[index + 1].node
        createPage({
            path: node.fields.slug,
            component: templateFile,
            context: {
                slug: node.fields.slug,
                prev,
                next
            }
        })
    })
}

