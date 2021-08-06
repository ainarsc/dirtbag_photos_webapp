import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import mountains from '../images/mountains.jpg'
import exploring from'../images/exploring.jpg'
import travel from '../images/travel.jpg'
import climbing from '../images/climbing.jpg'


// markup
const IndexPage = () => {
  const BRABD = "dirtbag photography",
  CATEGORY_1 = "travel",
  CATEGORY_2 = "mountains",
  CATEGORY_3 = "explore",
  CATEGORY_4 = "climbing"

  //Cant obstruct Static image into seperate component due to some limitations in gatsby staticimage
  return (
      <Layout>
        <Wrapper>
          <Box image={travel}/>
          <Box image={mountains}/>
          <Box image={exploring}/>
          <Box image={climbing}/>
        </Wrapper>
        <HeadlineArea>
          <Headline>
            {BRABD}
          </Headline>
          <SubHeading>
            <Tag>
              {CATEGORY_1}
            </Tag>
            <Tag>
              {CATEGORY_2}
            </Tag>
            <Tag>
              {CATEGORY_3}
            </Tag>
            <Tag>
              {CATEGORY_4}
            </Tag>
          </SubHeading>
        </HeadlineArea>
      </Layout>
  )
}
//Layout
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  
`

const Box = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-left: 1px solid rgba(101, 116, 58, 0.6);
  border-right: 1px solid rgba(101, 116, 58, 0.6);
  opacity: 0.7;
`
const HeadlineArea = styled.div`
  position: fixed;
  top: 40%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(230, 230, 230, 0.4);
` 
const Headline = styled.div`
  text-decoration: underline;
  font-size: 2.5rem;
  letter-spacing: 8px;
  padding-bottom: 1.5rem;
`

const SubHeading = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Tag = styled.span`
  font-size: 2em;
  display: flex;
  padding: 2px 0;
  letter-spacing: 7px;
  font-weight: 100;
`

export default IndexPage
