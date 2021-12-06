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


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const pusakas = graphql(`
   query {
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "pusaka"}}}, sort: {fields: frontmatter___title, order: ASC}){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              videoSourceURL
              videoTitle
              textEnglish
            }
          }
        }
      }
    }
  `).then(result => {

    // const posts = res.data.allMarkdownRemark.edges;
    const pusaka = result.data.allMarkdownRemark.edges;

    pusaka.forEach(({ node }, index) => {

      const prev = index === 0 ? null : pusaka[index - 1].node;
      const next = index === pusaka.length - 1 ? null : pusaka[index + 1].node


      createPage({
        path: '/benda-pusaka/' + node.fields.slug,
        component: path.resolve('./src/template/detail_pusaka.js'),
        context: {
          slug: node.fields.slug,
          prev,
          next
        },
      });
    });
  })

  const wisatas = graphql(`
    query {
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "wisata"}}}, sort: {fields: frontmatter___title, order: ASC}){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              
              title 
              key
              
            }
          }
        }
      }
    }
  `).then(result => {

    const wisata = result.data.allMarkdownRemark.edges;


    wisata.forEach(({ node }, index) => {

      const prev = index === 0 ? null : wisata[index - 1].node;
      const next = index === wisata.length - 1 ? null : wisata[index + 1].node


      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/template/detail_wisata.js'),
        context: {
          slug: node.fields.slug,
          prev,
          next
        },
      });






    });
  })

  return Promise.all([pusakas, wisatas])
};
