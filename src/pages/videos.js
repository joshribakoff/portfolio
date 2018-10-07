import React from "react";
import styled from 'styled-components'

const Page = styled.div`
padding: 1.25rem 1rem;
`

export default ({ data: {allYoutubeVideo} }) =>
  <Page>
    {allYoutubeVideo.edges.map(({node: {title, description, publishedAt, id, videoId}}) => (
        <div>
            <h1>{title}</h1>
            <img src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`} />
            <p>{description}</p>
        </div>
    ))}
  </Page>

export const query = graphql`
 query myVideos {
    allYoutubeVideo {
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
          privacyStatus
        }
      }
    }
  }
`