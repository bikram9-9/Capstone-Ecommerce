import React from 'react'

const Card = props => {
    const {name} = props;
    console.log("card is"+ {name})
  return (
    <h2>Category is {name}</h2>
  )
}

export default Card