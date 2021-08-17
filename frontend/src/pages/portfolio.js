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
          <GalleryListing edges={allStrapiGallery.edges} />
          <GalleryListing edges={allStrapiGallery.edges} />
          <GalleryListing edges={allStrapiGallery.edges} />
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
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  padding: 4rem 2rem 2rem 2rem;

`

export default Portfolio