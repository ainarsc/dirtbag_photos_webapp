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
  background-attachment: cover;
  padding: 2px;
`
const GalleryTitleBox = styled.div`

`
const Title = styled.span``