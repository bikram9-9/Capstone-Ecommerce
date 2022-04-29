import {React, useContext} from 'react'
import SHOP_DATA from '../../shop-data.json';
import { ProductContext } from '../../context/product.context';
import ProductCard from '../../Components/product-card/product-card.component';

const ShopPage = () => {

    
const {products} = useContext(ProductContext);
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ShopPage
