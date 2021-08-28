import React from "react";
import styled from "styled-components";
import Image from "../components/portfolio/Image";
import { graphql, Link, useStaticQuery } from "gatsby";

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiGallery {
        edges {
          node {
            photos {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      {data.allStrapiGallery.edges.map(({ node }) => (
        <GalleryCard>
          <Link to="/">
            <ImgBox>
              <Image image={node.photos.localFile} />
            </ImgBox>
          </Link>
        </GalleryCard>
      ))}
    </Wrapper>
  );
}

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
const ImgBox = styled.div`
  opacity: 0.8;
`;
