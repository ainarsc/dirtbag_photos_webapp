const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for Strapi galleries nodes to use in creating pages.
  const result = await graphql(
    `
        query {
            allStrapiGallery {
            edges {
                node {
                id
                title
                }
            }
            }
        }
        }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const galleryTemplate = path.resolve(`src/templates/gallery.js`);

  result.data.allStrapiGallery.edges.forEach(({ node }) => {
    let path = node.title.toLowerCase();
    createPage({
      path,
      component: galleryTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
      },
    });
  });
};
