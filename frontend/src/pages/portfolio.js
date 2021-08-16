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

export const pageQuery = graphql`
  query {
    allStrapiGallery {
      edges {
        node {
          thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  
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
`

export default Portfolio




const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem 2rem;
`