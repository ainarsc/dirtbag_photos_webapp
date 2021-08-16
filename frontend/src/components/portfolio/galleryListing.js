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
  margin-top: 1rem;
  width: 100%;
  height: 5rem;

`
const GalleryTitleBox = styled.div`

`
const Title = styled.span``