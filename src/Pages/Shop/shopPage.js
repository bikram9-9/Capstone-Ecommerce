import React from 'react'
import SHOP_DATA from '../../shop-data.json';

const ShopPage = () => {

    return (
        <div>
            {SHOP_DATA.map(({id,name}) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default ShopPage
