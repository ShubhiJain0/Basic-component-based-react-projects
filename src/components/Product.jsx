import React from 'react'
import "./Style.css";
import Price from './Price';
const Product = ({title, oldPrice, newPrice}) => {
  
  return (
    <div className="product">
      <h4 className="">{title}</h4>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Price oldPrice={oldPrice} newPrice={newPrice}></Price>
      <button>Order now</button>
    </div>
  );
}

export default Product