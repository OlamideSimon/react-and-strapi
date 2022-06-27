import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const Card = ({id, name, title, categories, rating, body}) => {
  return (
    <div key={id} className='review-card'>
        <div className='rating'>{rating}</div>
        <h2>{title}</h2>

        {categories.data.map(({id, attributes: {name}}) => (
        <small key={id}>{name}</small>
        ))}

        <ReactMarkdown>{body.substring(0, 200)}</ReactMarkdown>

        <Link to={`/details/${id}`}>Read more</Link>
    </div>
  )
}

export default Card