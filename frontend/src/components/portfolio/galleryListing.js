import React from 'react'
import styled from 'styled-components'
import Image from './Image'


export default function GalleryListing({edges}) {

    return (
            edges.map(({node}) => 
                    <GalleryCard>
                            <Image image={node.thumbnail.localFile} />
                    </GalleryCard>
                    
                )
    )
}


const GalleryCard = styled.div`
  min-width: 50%;
  padding: 2px;
  background-size: contain;
`
const GalleryTitleBox = styled.div`

`
const Title = styled.span``