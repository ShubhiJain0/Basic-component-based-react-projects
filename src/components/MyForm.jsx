import React, { useState } from 'react'

const MyForm = () => {
  
    const[input, setInput] =useState({
        firstname:"",
        lastname:""
     })

     function handleInput(e){
      setInput((curr)=>{
        return {...curr, [e.target.name]: e.target.value}
      })
     }

     function handleSubmit(e){
      e.preventDefault();
      console.log(input);
      setInput({
        firstname: "",
        lastname: "",
      });
      
     }
  
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="firstname">firstname: </label>
        <input
          type="text"
          name="firstname"
          value={input.firstname}
          id="firstname"
          onChange={handleInput}
        />
        <br /> <br />
        <label htmlFor="lastname">lastname: </label>
        <input
          type="text"
          value={input.lastname}
          id="lastname"
          name="lastname"
          onChange={handleInput}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default MyForm