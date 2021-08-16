import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import GalleryListing from '../components/portfolio/galleryListing'
import {graphql} from 'gatsby'



// markup
const Portfolio = ({data}) => {
  const {allStrapiGallery} = data

  return (
      <Layout>
        <Wrapper>
          <GalleryListing edges={allStrapiGallery.edges} />
        </Wrapper>
      </Layout>
  )
}

export default Portfolio


export const pageQuery = graphql`
    query {
      allStrapiGallery {
        edges {
          node {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 2rem 2rem 2rem;
`