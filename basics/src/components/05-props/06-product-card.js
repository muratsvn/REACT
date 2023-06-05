import React from 'react';
import "./06-product-card.scss";

const ProductCard = (props) => { //props ifadesi yerine children da yazabilirdik
    return (
        <div className='product-card'>
            geri kalan her sey
            <br />
            {props.name} {/*name=John'u John olarak alır */}
            {props.children}
        </div>
    )
};

export default ProductCard;