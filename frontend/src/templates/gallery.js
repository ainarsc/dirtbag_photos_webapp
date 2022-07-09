import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
// import Lightbox from "../components/lightbox";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Gallery({ pageContext }) {
  const { photos } = pageContext; //Returns an array

  return (
    <Layout>
      <Wrapper>
        {photos.map(({ localFile }) => (
          <Photo>
            <Link to="/">
              <ImgBox>
                <GatsbyImage image={getImage(localFile)} alt="Photo" />
              </ImgBox>
            </Link>
          </Photo>
        ))}
      </Wrapper>
      {/* <Lightbox/> */}
    </Layout>
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

const Photo = styled.div`
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
