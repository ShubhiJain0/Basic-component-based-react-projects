import React from 'react'
import Third from './Third';
const Second = ({menu}) => {
  
  return (
    <div>
      {
        menu && menu.length>0 ? 
        <div>
          {
           menu.map((item)=>(
            <ul>
              <Third item={item}></Third>
            </ul>
           )) 
          }
        </div> : <p>No item</p>
      }
    </div>
  )
}

export default Second