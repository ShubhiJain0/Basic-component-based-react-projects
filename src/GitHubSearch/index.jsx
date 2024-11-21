import React, { useEffect, useState } from 'react'
import Profile from './Profile'
const Git = () => {
 const[input,setInput]= useState("");
 const[userName, setUserName] = useState("");
 let [data , setData] = useState("");
 async function fetchData() {
    const response = await fetch( `https://api.github.com/users/${userName}`);
    data = await response.json();
    setData(data);
    
 }
 useEffect(()=>{
  fetchData();
 },[userName])
  return (
    <>index
    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/> 
    <button onClick={()=>{setUserName(input)}}>  Search</button>
    
    <Profile data = {data}></Profile>
    </>
  )
}

export default Git