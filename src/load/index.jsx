import React, { useEffect, useState } from 'react'
import './style.css'
const Load = () => {
 const [products, setProducts] =useState([]);
 const [ count , setCount] = useState(0);
 const[ loading, setLoading] = useState(true);
  useEffect(()=>{
    fetchProducts();
  },[count])
  async function fetchProducts(){
    try{
      setLoading(true)
      let data = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${count===0?0:count*10}`
      );
      let items = await data.json();

      setProducts(items.products);
      console.log(products);
    setLoading(false);
    } catch(e){
      console.log(e);
      setLoading(true)
    }
  }
  return (
    <>
      <div className="container">
        {loading ? (
          <h1>Loading items...!</h1>
        ) : (
          products.map((item) => {
            return (
              <div className="one-item">
                <h3>{item.title}</h3>
                <img src={item.thumbnail} alt="" />
                <h4>${item.price}</h4>
              </div>
            );
          })
        )}
      </div>
      {!loading && (
        <div className="button-container">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default Load