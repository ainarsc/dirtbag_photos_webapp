const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for Strapi galleries nodes to use in creating pages.
  const result = await graphql(`
    query {
      allStrapiGallery {
        edges {
          node {
            link
            photos {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1.7
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // GALLERY TEMPLATE
  const galleryTemplate = path.resolve(`src/templates/gallery.js`);

  result.data.allStrapiGallery.edges.forEach(({ node }) => {
    let path = `portfolio/${node.link}`;

    createPage({
      path,
      component: galleryTemplate,
      context: {
        pagePath: path,
        photos: node.photos,
      },
    });
  });
};
