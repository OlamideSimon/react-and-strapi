import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const CATEGORY = gql`
  query GetCategories($id: ID!){
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                rating
                body
                categories{
                  data{
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
      }
    }
  }
`

const Category = (props) => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: {id}
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :)</p>

  return (
    <div>
      <h2>{data.category.data.attributes.name}</h2>
      {data.category.data.attributes.reviews.data.map(({id, attributes: {body, rating, title, categories}}) => (
        <Card key={id} id={id} body={body} rating={rating} title={title} categories={categories} />
      ))}
    </div>
  )
}

export default Category