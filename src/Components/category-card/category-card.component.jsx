import React from 'react'
import './category-card.styles.scss'
const Card = props => {
    const {name} = props;
    console.log("card is"+ {name})
  return (
    <h2 className='card'>Category is {name}</h2>
  )
}

export default Card