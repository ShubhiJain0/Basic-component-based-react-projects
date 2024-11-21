import { createContext, useEffect, useState } from "react";
import ContextGlobal from "../data";
export const myContext=createContext();


const ContextState = ({children}) => {
  const[contextData, setContextData]=useState({});
  useEffect(async ()=>{
    const data=await ContextGlobal();
    setContextData(data);
    
  },[])
  return <myContext.Provider value={contextData}>{children}</myContext.Provider>
}

export default ContextState