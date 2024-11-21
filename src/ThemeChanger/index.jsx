import React, { useState } from 'react'
import "./style.css"
const ChangeTheme = () => {
  const [theme , setTheme] = useState(false);
  return (
    <div
      className={`block ${theme? 'light': 'dark'}`}
    >
      <h1>Hello, world</h1>
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ChangeTheme;