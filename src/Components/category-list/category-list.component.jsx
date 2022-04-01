import React from 'react'
import Card from '../category-card/category-card.component'
 
const CardList = (props) => {
    const {list} = props;
    // console.log("CARDLIST" + JSON.stringify(list))
    const categories = list;
    console.log(categories)
    

  return (
    <div>
    {categories.map((category)=>{
        <Card name={category.title} />
    })}

    </div>
    )
}

export default CardList;