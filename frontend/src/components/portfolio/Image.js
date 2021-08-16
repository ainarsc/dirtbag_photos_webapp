import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Image({image}) {
    const placeholder = useStaticQuery(graphql`
            query  {
                strapiGallery {
                    thumbnail {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: DOMINANT_COLOR)
                            }
                        }
                    }
                }
            }
      
        `
    )

    if (!image) {
        return (
            <GatsbyImage image={getImage(placeholder.strapiGallery.thumbnail.localFile)} alt="placeholder"/>
        )
    }

    return (
        <GatsbyImage image={getImage(image)} alt="thumbnail"/>
    )
}
