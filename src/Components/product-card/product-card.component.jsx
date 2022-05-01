import React, { useContext } from 'react'
import './product-card.styles.scss'
import PrimaryButton from '../buttons/primary-button/primary-button.component'
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
    const{name, price,imageUrl} = product; 
    const{addToCart} = useContext(CartContext)

    const addProductToCart = () =>{
      addToCart(product)
    }
    
  return (
    <div className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <div onClick={addProductToCart}>
          <PrimaryButton text="Add to Cart" redirectTo="/cart"/>
        </div>
    </div>
  )
}

export default ProductCard