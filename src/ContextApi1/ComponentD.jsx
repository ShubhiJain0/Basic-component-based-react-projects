import React, { useContext } from 'react'
import { myContext } from './ComponentA'

const ComponentD = () => {
 const data=useContext(myContext);
  return (
    <div>{data}</div>
  )
}

export default ComponentD