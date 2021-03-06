const path = require('path')

// create new page on each of the slugs
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // import the template post.js
  const blogTemplate = path.resolve('./src/template/post.js')

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
