import React, { useState } from 'react';

function Print() {
  console.log("hello");
}

function handleHover() {
  console.log("hello");
}


const Button = () => {
  const[liked, setLiked]=useState(false);
  function like() {
    setLiked(!liked);
  }
  return (
    <>
      <div>
        
        <h1>Like Button</h1>
        <h1>
          <i onClick={like} class="fa-solid fa-heart" style={{color : liked && "red"}}></i>
        </h1>
      </div>
    </>
  );
}

export default Button;
