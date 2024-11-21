import React, { useEffect, useState } from 'react'
import './style.css'
const CustomScroll = () => {
 const[data, setData] = useState([]);
 const [scrollPercen, setScrollPercen] = useState(0);
 async function fetchData(){
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  setData(data.products);
  
  
 }
 useEffect(()=>{
  fetchData();
 }, [])

 function handleScrollPercentage(){
 const howMuchScrolled =
   document.documentElement.scrollTop; 

 const height =
   document.documentElement.scrollHeight -
   document.documentElement.clientHeight;
  
   setScrollPercen((howMuchScrolled/height)*100);
     
  console.log(scrollPercen);
 } 

 

 useEffect(()=>{
  window.addEventListener("scroll", handleScrollPercentage);

  return ()=>{window.removeEventListener("scroll", ()=>{})}
 }, [scrollPercen])

  return (
    <div>
      <div className="top-container">
        <div className="upperScroll">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercen}%` }}
          ></div>
        </div>
      </div>

      {data && data.length > 0 ? (
        <div>
          {data.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CustomScroll