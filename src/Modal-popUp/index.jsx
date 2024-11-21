import React, { useState } from 'react'
import PopUp from './PopUp'
import './style.css'
const Modal = () => {
 const[display, setDisplay]= useState(false);
 function onClose(){
    setDisplay(false);
 }
  return (
    <div className='modal'>
      <button onClick={() => setDisplay(!display)}>Open Model Popup</button>
      {display ? (
        <PopUp onClose={onClose} header={"header"} body={"body"} footer={"footer"}></PopUp>
      ) : null}
    </div>
  );
}

export default Modal