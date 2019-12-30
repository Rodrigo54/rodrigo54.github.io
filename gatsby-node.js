/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allMarkdownRemark.edges
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);

  for (const { node, next, previous } of posts) {
    const path = `/blog${node.fields.slug}`;
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous,
      },
    })
  }

  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blog/` : `/blog/page/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list.tsx`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
