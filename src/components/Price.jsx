import React from 'react'

const Price = ({oldPrice, newPrice}) => {
  return (
    <div>
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>{newPrice}</span>
    </div>
  );
}

export default Price