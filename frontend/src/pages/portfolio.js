import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Image from "../components/portfolio/Image";

//GRAPHQL QUERY
export const pageQuery = graphql`
  query {
    allStrapiGallery {
      edges {
        node {
          link
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
  //FILTER ITEMS
  const TRAVEL = "-TRAVEL",
    ADVENTURE = "-ADVENTURE",
    MOUNTAINS = "-MOUNTAINS",
    EXPLORE = "-EXPLORE";

  return (
    <Layout>
      <LinksContainer>
        <Links>
          <LinkItem>{TRAVEL}</LinkItem>
          <LinkItem>{ADVENTURE}</LinkItem>
          <LinkItem>{MOUNTAINS}</LinkItem>
          <LinkItem>{EXPLORE}</LinkItem>
        </Links>
      </LinksContainer>

      <Wrapper>
        <Filter>
          <List>
            <ListItem></ListItem>
            {/* <ListItem>{ADVENTURE}</ListItem>
            <ListItem>{MOUNTAINS}</ListItem>
            <ListItem>{EXPLORE}</ListItem> */}
          </List>
        </Filter>
        <GalleryWrapper>
          {allStrapiGallery.edges.map(({ node }) => (
            <GalleryCard>
              <Link to={node.link}>
                <ImgBox>
                  <Image image={node.thumbnail.localFile} />
                </ImgBox>

                <GalleryTitleBox>
                  <Title>Placeholder</Title>
                </GalleryTitleBox>
              </Link>
            </GalleryCard>
          ))}
        </GalleryWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  align-items: flex-start;
  align-content: space-between;
  overflow: overlay;
`;

const GalleryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0;
`;
const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
  text-align: left;
  font-size: 20px;
  :hover {
    font-size: 27px;
  }
  cursor: pointer;
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

const LinksContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 1rem;
`;
const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0;
`;
const LinkItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
  text-align: left;
  font-size: 20px;
  :hover {
    font-size: 27px;
  }
  cursor: pointer;
`;

export default Portfolio;
