import React, { useState } from 'react'

const Lu = ({color}) => {
  const [turn, setTurn] =useState(0)
  function handleTurn(){
    setTurn(turn+1);
  }
  return (

    <div style={{border: "1px solid black", padding:"10px"}}>
      <h1 >{color} {turn}</h1>
      <button onClick={handleTurn}>+1</button>
    </div>
  )
}

export default Lu