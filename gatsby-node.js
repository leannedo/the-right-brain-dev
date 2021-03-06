const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    console.log('slugggggg', slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

// create new page on each of the slugs
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // import the template post.js
  const blogTemplate = path.resolve('./src/template/post.js')

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  console.log(JSON.stringify(res.data.allMarkdownRemark.edges, undefined, 4))
}
