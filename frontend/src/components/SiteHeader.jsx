import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`

const SiteHeader = () => {
  const { loading, data, error } = useQuery(CATEGORIES)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Encountered an error:)</p>

  return (
    <div className='site-header'>
        <Link to='/'><h1>Alpha Reviews</h1></Link>
        <nav className='categories'>
          <span>Filter reviews by category:</span>
          {data.categories.data.map(({id, attributes}) => (
            <Link key={id} to={`/category/${id}`}>{attributes.name}</Link>
          ))}
        </nav>
    </div>
  )
}

export default SiteHeader