import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";

export const pageQuery = graphql`
  query {
    strapiAbout {
      Content
      Title
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  const { Content, Title } = data.strapiAbout;

  return (
    <Layout>
      <Wrapper>
        <Headline>{Title}</Headline>
        <Text>{Content}</Text>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;

  padding: 4rem 2rem 2rem 2rem;
`;

const Headline = styled.h1`
  font-size: 25px;
`;

const Text = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 30px;
  padding: 2rem 5rem;
`;

export default IndexPage;
