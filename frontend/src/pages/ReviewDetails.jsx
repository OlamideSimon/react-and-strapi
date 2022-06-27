import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const REVIEW = gql`
  query getReview ($id: ID!) {
    review (id: $id) {
      data {
        id
        attributes {
          rating
          title
          body
        }
      }
    }
  }
`

const ReviewDetails = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {id}
  })
  
  if(loading) return <p>Loading...</p>
  if(error) return <p>Encountered a error :)</p>

  return (
    <div className='review-card'>
      <div className='rating'>{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>

      <small>console list</small>

      <ReactMarkdown>{data.review.data.attributes.body}</ReactMarkdown>
    </div>
  )
}

export default ReviewDetails