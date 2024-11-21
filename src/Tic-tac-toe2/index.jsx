import React, { useEffect, useState } from 'react'
import './style.css'
const Square=({value, onClick})=>{
  return(
    <button className='square' onClick={onClick}>{value}</button>
  )
}
const TicTacToe = () => {
  const [sq,setSq] = useState(Array(9).fill(""));
  const [ winner,setWinner] = useState(false);
  const [winningVal, setWinningVal] = useState('');
  const [xturn,setXturn] = useState(true);
  function handleOnClick(currSqInd){
    let cpy = [...sq];
    if(cpy[currSqInd]) return;
    if(xturn){
      cpy[currSqInd]='X';
    } else{
      cpy[currSqInd]='O';
    }
    setSq(cpy);
    setXturn(!xturn);
  }
  function handleRestart(){
    setXturn(true);
    setSq(Array(9).fill(""));    
  }
  function checkWinner(){
    const winningPattern=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for( let i =0; i <winningPattern.length;i++){
      const [a,b,c]=winningPattern[i];

      if(sq[a] && sq[a]==sq[b] && sq[a]==sq[c]){
        setWinner(true);
        setWinningVal(sq[a]);
      }
    }
  }
  useEffect(()=>{
    checkWinner();
  }, [sq])
  return (
    <div className="container">
      <div className="row">
        <Square
          value={sq[0]}
          onClick={() => {
            handleOnClick(0);
          }}
        ></Square>
        <Square
          value={sq[1]}
          onClick={() => {
            handleOnClick(1);
          }}
        ></Square>
        <Square
          value={sq[2]}
          onClick={() => {
            handleOnClick(2);
          }}
        ></Square>
      </div>
      <div className="row">
        <Square
          value={sq[3]}
          onClick={() => {
            handleOnClick(3);
          }}
        ></Square>
        <Square
          value={sq[4]}
          onClick={() => {
            handleOnClick(4);
          }}
        ></Square>
        <Square
          value={sq[5]}
          onClick={() => {
            handleOnClick(5);
          }}
        ></Square>
      </div>
      <div className="row">
        <Square
          value={sq[6]}
          onClick={() => {
            handleOnClick(6);
          }}
        ></Square>
        <Square
          value={sq[7]}
          onClick={() => {
            handleOnClick(7);
          }}
        ></Square>
        <Square
          value={sq[8]}
          onClick={() => {
            handleOnClick(8);
          }}
        ></Square>
      </div>
      <button onClick={()=>handleRestart()}>Restart</button>
      {
        winner && <p>{winningVal} is the winner</p>
      }
    </div>
  );
}

export default TicTacToe