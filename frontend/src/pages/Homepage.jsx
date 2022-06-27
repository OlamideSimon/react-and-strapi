import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Card from '../components/Card'

const REVIEWS = gql `
  query getReviews{
    reviews{
      data{
        id
        attributes{
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

const Homepage = () => {
  const { data, loading, error } = useQuery(REVIEWS)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>

  return (
    <div>
      {data.reviews.data.map(({id, attributes: {body, rating, title, categories}}) => (
        <Card key={id} id={id} body={body} rating={rating} title={title} categories={categories} />
      ))}
    </div>
  )
}

export default Homepage