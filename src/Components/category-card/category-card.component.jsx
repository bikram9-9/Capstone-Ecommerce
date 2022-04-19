import React from 'react'
import './category-card.styles.scss';

const Card = props => {
    const {name} = props;
    console.log("card is"+ {name})
  return (
    <div className="container">
      <h2>Category is {name}</h2>
    </div>
  )
}

export default Card