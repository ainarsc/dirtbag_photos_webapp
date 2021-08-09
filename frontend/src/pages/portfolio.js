import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'


// markup
export default () => {
  return (
      <Layout>
        <Wrapper>
          <GalleryCard>

          </GalleryCard>
          <GalleryCard>
            
          </GalleryCard>
          <GalleryCard>
            
          </GalleryCard>
          <GalleryCard>
            
          </GalleryCard>
          
        </Wrapper>
      </Layout>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 2rem 2rem 2rem;
`

const GalleryCard = styled.div`
  margin-top: 1rem;
  border: 1px solid white;
  width: 100%;
  height: 100%;
`
const GalleryTitleBox = styled.div`

`
const Title = styled.span`

`


