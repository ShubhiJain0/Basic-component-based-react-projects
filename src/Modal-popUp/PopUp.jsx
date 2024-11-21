import React from 'react'

const PopUp = ({onClose, header,body,footer}) => {
  return (
    <div>
      <h2 onClick={onClose}>&times;</h2>
      <h1>{header}</h1>
      <p>{body}</p>
      <footer>{footer}</footer>
    </div>
  )
}

export default PopUp