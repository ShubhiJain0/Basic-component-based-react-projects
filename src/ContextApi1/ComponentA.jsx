import React, { createContext } from 'react'
import ComponentB from './ComponentB'

export const myContext = createContext();

const ComponentA = ({data}) => {
  return <div><myContext.Provider value={data}>
    <ComponentB></ComponentB>
    </myContext.Provider></div>;
}

export default ComponentA