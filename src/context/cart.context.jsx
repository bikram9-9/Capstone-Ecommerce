import {createContext, useState,useContext} from 'react'

export const CartContext = createContext({
    cartItems: [],
    addToCart: ()=> null,
})

export const CartProvider = ({children}) => {
    const[cartItems, addCartItems] = useState([]);
    const items = {cartItems};

   
    const addToCart = (product) => {
      const selectedItems = [...cartItems];
      //if cartitems contains the product, change quantitiy in selectedItems
      if(selectedItems.includes(product)){
        const currentItem = selectedItems.find((selectedItem)=> { return selectedItem.id});
        selectedItems.map((selectedItem) =>(
          currentItem.id === product.id 
          ? {...selectedItem, quantitiy: selectedItem.quantitiy +1}
          : selectedItem
        )
        );
        addCartItems(selectedItems);
      }else{
        const newProduct = {...product, quantitiy: 1};
        selectedItems.push(newProduct)
        addCartItems(selectedItems);
      }
    }
    const values = {cartItems, addToCart};
  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  )
}
