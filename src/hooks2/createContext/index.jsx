import React, { createContext } from 'react'

export const BioContext = createContext();

const BioProvider = ({children})=>{
  const myName = "Shubhi";
  return (<BioContext.Provider value={myName}>
    {children}
  </BioContext.Provider>)
}

export default BioProvider;