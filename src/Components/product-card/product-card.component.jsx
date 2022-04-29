import React from 'react'
import './product-card.styles.scss'
import PrimaryButton from '../buttons/primary-button/primary-button.component'

const ProductCard = ({product}) => {
    const{name, price,imageUrl} = product; 

    const onAddToCartClick = () =>{
      
    }
    
  return (
    <div className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <PrimaryButton text="Add to Cart" redirectTo="/cart"/>
    </div>
  )
}

export default ProductCard