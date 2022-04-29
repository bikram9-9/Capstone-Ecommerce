// import React from 'react'
// import PrimaryButton from '../buttons/primary-button/primary-button.component'
// import './cart-dropdown.styles.scss'

// const CartDropdown = ({cartProducts}) => {
//   return (
//     <div className='dropdownContainer'>
//         <div className='cartItems'>
//           {cartProducts.map(({name,imageUrl,price,quantity}) =>{
//             <div className='itemContainer'>
//               <img src={imageUrl} alt={`${name}`}/>
//               <div className='nameAndPrice'>
//                 <span>{name}</span>
//                 <span>{`${quantity} x ${price}`}</span>
//               </div>
//             </div>
//           })}
//             <PrimaryButton text="GO TO CHECKOUT" redirectTo="/cart"/>
//         </div>
//     </div>
//   )
// }

// export default CartDropdown