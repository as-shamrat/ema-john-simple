import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const handleAddProduct = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    const [cart, setCart] = useState([]);
    // console.log(firstTen);
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} key={pd.key}></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;