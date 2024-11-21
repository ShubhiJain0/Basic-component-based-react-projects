import React from 'react'

const Hello = ({username, textColor}) => {
  let style={backgroundColor: textColor}
  return (
    <div>
      <p style={style}>Greeting, human {username}</p>
    </div>
  )
}

export default Hello