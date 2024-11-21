import React, { useRef, useState } from 'react'
import useFetchData from './useFetchData'

const Test = () => {
  const {data} = useFetchData({url:'https://dummyjson.com/products'});
  console.log(data);
 const inputRef =useRef();
 function handleEvent(){
  console.log(inputRef.current.value);
  setText(!text);
 }
 const [text,setText]=useState(false);
  return (
    <div>Test
      <input type="text"  ref={inputRef}/>
      <button onClick={()=>handleEvent()}>Press me</button>
      {
        text? <div>Hello</div>: null
      }
    </div>

  )
}

export default Test