import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import landing from "../images/landing.jpg";

// markup
const IndexPage = () => {
  const BRABD = "Ainars Ciesa",
    CATEGORY_1 = "travel",
    CATEGORY_2 = "mountains",
    CATEGORY_3 = "explore",
    CATEGORY_4 = "climbing";

  //Cant obstruct Static image into seperate component due to some limitations in gatsby staticimage
  return (
    <Layout>
      <Wrapper>
        <Box image={landing} />
      </Wrapper>
      <HeadlineArea>
        {/* <Headline>{BRABD}</Headline> */}
        <SubHeading>
          <Tag>{CATEGORY_1}</Tag>
          <Tag>{CATEGORY_2}</Tag>
          <Tag>{CATEGORY_3}</Tag>
          <Tag>{CATEGORY_4}</Tag>
        </SubHeading>
      </HeadlineArea>
    </Layout>
  );
};
//Layout
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

const Box = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  filter: contrast(80%);
`;
const HeadlineArea = styled.div`
  position: fixed;
  top: 40%;
  width: 40%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-right: 1px solid white;
`;

const Headline = styled.div`
  text-decoration: underline;
  font-size: 2.5rem;
  font-weight: 100;
  letter-spacing: 8px;
  padding-bottom: 1.5rem;
`;

const SubHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const Tag = styled.span`
  font-size: 2em;
  font-weight: 100;
  display: flex;
  justify-content: flex-end;
  padding: 2px 0;
  letter-spacing: 7px;
  font-size: 40px;
  text-shadow: 4px 4px rgba(25, 25, 25, 0.8);
`;

export default IndexPage;
