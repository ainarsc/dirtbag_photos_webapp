import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { graphql, link } from "gatsby";
import Image from "../components/portfolio/Image";

//GRAPHQL QUERY
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
`;

//MARKUP
const Portfolio = ({ data }) => {
  const { allStrapiGallery } = data;

  return (
    <Layout>
      <Wrapper>
        {allStrapiGallery.edges.map(({ node }) => (
          <GalleryCard>
            <Link to="/">
              <ImgBox>
                <Image image={node.thumbnail.localFile} />
              </ImgBox>

              <GalleryTitleBox>
                <Title>Placeholder</Title>
              </GalleryTitleBox>
            </Link>
          </GalleryCard>
        ))}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  padding: 4rem 2rem 2rem 2rem;
`;

const GalleryCard = styled.div`
  min-width: 50%;
  padding: 2px;
  border-radius: 10px;
  &:hover {
    div${ImgBox} {
      opacity: 1;
    }
  }
`;
const GalleryTitleBox = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(25, 25, 25);
`;
const Title = styled.span`
  font-size: 1em;
  letter-spacing: 8px;
`;
const ImgBox = styled.div`
  opacity: 0.8;
`;

export default Portfolio;
