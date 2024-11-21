import React from 'react'
import Second from './Second'
import './style.css'
const First = ({menu=[]}) => {
  return (
    <div className='main-container'>
     {
      menu && menu.length>0? <div>
       <Second menu={menu}></Second>
      </div>:null
     } 
    </div>
  )
}

export default First