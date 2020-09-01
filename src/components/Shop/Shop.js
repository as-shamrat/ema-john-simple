import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    
    // console.log(firstTen);
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(pd => <Product product={pd} key={pd.key}></Product>)
               }
            </div>
            <div className="cart-container">
                <h3>this is a cart</h3>
            </div>
            
        </div>
    );
};

export default Shop;