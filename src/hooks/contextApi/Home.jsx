import React, { useContext } from 'react'
import {BioContext} from ".";
const Home = () => {
  const myname =useContext(BioContext);
  console.log(myname);
  
  return (
    <div>Home</div>
    
  )
}

export default Home