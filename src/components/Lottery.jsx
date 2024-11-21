import React, { useState } from 'react'

const Lottery = () => {
 const[num1, setNum1]= useState(0);
 
 const [num2, setNum2] = useState(0);
 
 const [num3, setNum3] = useState(0);
 const [ win, setWin] = useState (false);

function play(){
  setNum1(Math.floor(Math.random()*10)); 
  
  setNum2(Math.floor(Math.random() * 10)); 
  
  setNum3(Math.floor(Math.random() * 10));  
  checkWin();
}

function checkWin(){
  let sum = num1+num2+num3;
  if( sum === 20){
    setWin(true);
  }
  else{
    setWin(false);
  }
}
return (
  <>
    <h1>{num1}</h1>
    <h1>{num2}</h1>
    <h1>{num3}</h1>

    <button onClick={()=>{
      play();
    }}>Play</button>
    {
      win? <div>
        <p>Congratulations!</p>
      </div>: null
    }
  </>
);
}
export default Lottery