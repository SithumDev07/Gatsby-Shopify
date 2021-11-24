const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
  query{
    allShopifyProduct {
      edges {
        node {
          title
          handle
          variants {
            shopifyId
            displayName
            selectedOptions {
              name
              value
            }
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          description
          images {
            src
          }
          productType
          tags
        }
      }
    }
  }
  `)

 
  result.data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
      path: `/${node.handle}`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        product: node
      },
    })
  })


}
