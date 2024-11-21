import React, { useRef } from 'react'
import UseFetchData from './UseFetchData';
const ScrollTopAndBottom = () => {
  const bottomRef=useRef(null)
 const { data } = UseFetchData({ url: "https://dummyjson.com/products?limit=100" });
 console.log(data);
 function handleScrollToTop(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
  })
 }

 function handleScrollToBottom() {
   bottomRef.current.scrollIntoView({behavior:"smooth"})
 }
  return (
    <div>
      <button
        onClick={() => {
          handleScrollToBottom()
        }}
      >
        Scroll to bottom
      </button>
      <ul>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </ul>
      <div ref={bottomRef}></div>
      <button
        onClick={() => {
          handleScrollToTop()
        }}
      >

        Scroll to top
      </button>
    </div>
  );
}

export default ScrollTopAndBottom;