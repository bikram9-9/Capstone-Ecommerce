import {React, createContext} from 'react'

import SHOP_DATA from '../shop-data.json';

export const ProductContext = createContext({

});

export const ProductProvider = ({children}) => {
    return (
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}

