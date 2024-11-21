import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import './App.css'
const StarRating = ({noOfStars=7}) => {
 const[rating, setRating]= useState(0);
 const [ hover, setHover] = useState(0)
 function handleClick(index){
    setRating(index)  
  }
  function handleMouseMove(index){
    setHover(index);
  } 
  function handleMouseLeave(index){
    setRating(index)
  }
 return (
    
    <div>
      <h1>StarRating</h1>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index=index+1;
          return <FaStar id={index}
          className={index<=(hover||rating)?'active': 'inactive'} onClick={()=>handleClick(index)}
          onMouseMove={()=>handleMouseMove(index)} onMouseLeave={()=>handleMouseLeave(index)} size={50}/>;
        })
      }
    </div>
  );
}

export default StarRating