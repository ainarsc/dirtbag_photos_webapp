import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function GalleryListing({edges}) {

    return <>
        {
        edges.map(({node}) => {
                node.cover.map((i) => {
                    <GalleryCard>
                        <GatsbyImage image={getImage(i.localFile)} alt="" />
                    </GalleryCard>
                })
            })
        }
    </>
}


const GalleryCard = styled.div`
  margin-top: 1rem;
  border: 1px solid white;
  width: 100%;
  height: 100%;
`
const GalleryTitleBox = styled.div`

`
const Title = styled.span``