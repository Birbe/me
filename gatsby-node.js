exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve("./src/templates/post.js");

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query!");
  }

  const pages = result.data.allMarkdownRemark.edges;

  for (let { node } of pages) {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  }
};
