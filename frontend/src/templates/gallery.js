import React from "react";
import styled from "styled-components";
import Image from "./portfolio/Image";
import { Link } from "gatsby";

export default function GalleryListing({ data }) {
  return data.map(({ node }) => (
    <GalleryCard>
      <Link to="/">
        <ImgBox>
          <Image image={node.thumbnail.localFile} />
        </ImgBox>
      </Link>
    </GalleryCard>
  ));
}

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
