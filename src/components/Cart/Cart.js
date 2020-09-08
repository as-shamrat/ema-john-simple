import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    console.log(cart);
    return (
        <div>
            <h4>Order summary</h4>
            <h5>Items orderd: {cart.length}</h5>
            <p>toal price: {total}</p>
        </div>
    );
};

export default Cart;