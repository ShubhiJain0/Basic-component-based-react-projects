import React, { useRef, useState } from 'react'
import useDisplay from './useDisplay';

const Test2 = () => {
  const [ showContent, setShowContent] = useState(false);
  const ref =useRef()
  useDisplay(ref,()=>{setShowContent(false)})
  return (
    <div >
     {
      showContent? <div ref={ref}>
        <h1>Hello I am heading</h1>
        <p>I am a paragraph.</p></div>: <button onClick={()=>{setShowContent(true)}}>Show content</button>
     }
    </div>
  )
}

export default Test2