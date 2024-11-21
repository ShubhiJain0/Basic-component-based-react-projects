import { createContext } from "react";

export const BioContext = createContext();

const BioProvider =({children})=>{
  const myName = "Shuchan";

  return <BioContext.Provider value={myName}>
    {children}
  </BioContext.Provider>
}

export default BioProvider;