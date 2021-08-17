import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import {Link} from 'gatsby'


export default function GalleryListing({edges}) {

    return (
            edges.map(({node}) => 
                    <GalleryCard>
                                    <Link to="/">
                                    <ImgBox>
                                <Image image={node.thumbnail.localFile} />
                            </ImgBox>
                            
                            <GalleryTitleBox>
                                <Title>
                                    Placeholder
                                </Title>
                            </GalleryTitleBox>
                                    </Link>

                    </GalleryCard>
                    
                )
    )
}


const GalleryCard = styled.div`
  min-width: 50%;
  padding: 2px;
  border-radius: 10px;
  &:hover {
    div${ImgBox}{
    opacity: 1;
    }
  }

`
const GalleryTitleBox = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(25, 25, 25);
`
const Title = styled.span`
    font-size: 1em;
    letter-spacing: 8px;
`
const ImgBox = styled.div`
    opacity: 0.8;
`