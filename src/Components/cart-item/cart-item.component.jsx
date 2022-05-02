import React from 'react'
import './cart-item.styles.scss'

const CartItem = (item) => {
    const {name, price}= item.item;
    // console.log("NAME IS " + JSON.stringify(item))
    return (
        <div>
            <h2>{name}</h2>
             <span>{price}</span>
        </div>
    )
}
export default CartItem


