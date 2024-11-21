// import React, { useState } from 'react'
// import './style.css'
// const Square=({value, onClick})=>{
//   return (
//       <button className="square" onClick={onClick}>
//         {value}
//       </button>
     
//   );
// }

// const TickTack = () => {
//  const[sq, setSq]= useState(Array(9).fill(''))
//  const[xturn,setXturn]=useState(true);
//  const[winner,setWinner] = useState(false);
//  const[winnerVal,setWinnerVal] = useState("");
//  function getWinner(){
//   const winningPattern=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [2,5,8],
//     [0,4,8],
//     [0,3,6],
//     [1,4,7],
//     [2,4,6]
//   ]
//   for( let i =0;i<winningPattern.length;i++){
//    const[x,y,z]= winningPattern[i];
//    if(sq[x] && sq[x]==sq[y] && sq[x] ==sq[z]){
//     setWinner(true);
//     setWinnerVal(sq[x]);
//    }
//   }

//  }
//  function handleOnClick(currSquareInd){
//     let cpySq=[...sq];
//     if(cpySq[currSquareInd]) return;
//     cpySq[currSquareInd]=xturn?'X':'O';
//     setXturn(!xturn);
//     setSq(cpySq);
//     getWinner();
//  }
//   return (
//     <div className="container">
//       <div className="rows">
//         <Square value={sq[0]} onClick={() => handleOnClick(0)} />
//         <Square value={sq[1]} onClick={() => handleOnClick(1)} />
//         <Square value={sq[2]} onClick={() => handleOnClick(2)} />
//       </div>

//       <div className="rows">
//         <Square value={sq[3]} onClick={() => handleOnClick(3)} />
//         <Square value={sq[4]} onClick={() => handleOnClick(4)} />
//         <Square value={sq[5]} onClick={() => handleOnClick(5)} />
//       </div>

//       <div className="rows">
//         <Square value={sq[6]} onClick={() => handleOnClick(6)} />
//         <Square value={sq[7]} onClick={() => handleOnClick(7)} />
//         <Square value={sq[8]} onClick={() => handleOnClick(8)} />
//       </div>
//       {
//         winner && <div><p>{winnerVal} is Winner</p></div>
//       }
//     </div>
//   );
// }

// export default TickTack