import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CardIcon = () => {
  return (
    <div >
        <Link to='/cart' className='cartIconContainer'>
            <ShoppingIcon className='shoppingIcon'/>
            <span className='itemCount'>4</span>
        </Link>

    </div>
  )
}

export default CardIcon