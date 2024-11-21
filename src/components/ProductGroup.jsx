import React from 'react'
import Product from './Product';
const ProductGroup = () => {
  let styles ={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems:"center",
    height: "100vh"

  }
  return (
    <div style={styles}>
      <Product title={"laptop"} oldPrice={"700"} newPrice={"500"}></Product>

      <Product title={"Apple"} oldPrice={"700"} newPrice={"500"}></Product>

      <Product
        title={"Smart Watch"}
        oldPrice={"700"}
        newPrice={"500"}
      ></Product>

      <Product title={"Phone"} oldPrice={"700"} newPrice={"500"}></Product>
    </div>
  );
}

export default ProductGroup