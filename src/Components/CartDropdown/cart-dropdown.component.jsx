import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import PrimaryButton from '../buttons/primary-button/primary-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const{cartItems} = useContext(CartContext);
  console.log('CART ITEMS' + JSON.stringify(cartItems))
  return (
    <div className='dropdownContainer'>
        <div className='cartItems'>
          {cartItems.map((item)=> (
             <CartItem key={item.id} item={item}/>
          ))}
            <PrimaryButton text="GO TO CHECKOUT" redirectTo="/cart"/>
        </div>
    </div>
  )
}

export default CartDropdown