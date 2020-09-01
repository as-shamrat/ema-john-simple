import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    return (
        <div>
            <h3>this is product{props.product.key}</h3>
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;