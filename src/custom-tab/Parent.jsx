import React from 'react'
import Child from './Child'
const Parent = ({Data}) => {
  return (
    <div>
      <Child Data={Data} onChange={handleOnChange}></Child>
    </div>
  )
}

export default Parent