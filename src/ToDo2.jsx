import React, { useState } from 'react'
import "./App.css"

const ToDo2 = () => {
  const [list,setList]= useState([]);
  const [inputText, setInputText] = useState("");
  const [ edit, setEdit] = useState(false);
   const [ editContent, setEditContent] = useState("");
   const [marked, setMarked] = useState([]);
  function handleSubmit(){
    console.log("button clicked");
    setList([...list, inputText]);
    setInputText("");
  }

  function handleInputBar(e){
    setInputText(e.target.value);  
    
  }

  function handleDelete(ind){
    console.log(ind);
   let updatedList = [...list];
    updatedList.splice(ind, 1);
   setList([...updatedList]);
   
  }

  function handleEdit(ind){
    setEdit(true);
    setEditContent(list[ind])
    console.log(editContent);
    
  }

  function handleSave(ind){
    let updated = [...list];
    updated.splice(ind,1,editContent);
    setList([...updated]);
    setEdit(false);
    setEditContent("");
  }

  function handlemark(ind){
  setMarked([...marked, ind]);    
  }

  function handleEditContent(e){
   setEditContent(e.target.value) 
  }

  function handleUnmark(ind){
    setMarked(marked.filter((id)=>id!==ind));
  }

  
  return (
    <div className="card">
      <div className="div ">
        <input
          type="text"
          name=""
          value={inputText}
          id="submitInput"
          onChange={(e) => handleInputBar(e)}
        />
        <button id='submitBtn' onClick={() => handleSubmit()}>Submit</button>
      </div>

      <div className="list">
        <ul>
          {list.map((element, ind) =>
            edit ? (
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  value={editContent}
                  onChange={(e) => handleEditContent(e)}
                />
                <button onClick={() => handleSave(ind)}>Save</button>
                <button onClick={() => handleBack()}>Back</button>
              </div>
            ) : (
              <li id={ind} className="item-list">
                <span
                  style={{
                    textDecoration: marked.includes(ind)
                      ? "line-through"
                      : null,
                  }}
                >
                  {element}
                </span>{" "}
                <div className='icons'>
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => {
                      handleDelete(ind);
                    }}
                  ></i>
                  <i
                    class="fa-solid fa-pen-to-square"
                    onClick={() => {
                      handleEdit(ind);
                    }}
                  ></i>
                  <i
                    class="fa-solid fa-check"
                    onClick={() => {
                      handlemark(ind);
                    }}
                  ></i>
                  <i
                    class="fa-regular fa-circle-xmark"
                    onClick={() => {
                      handleUnmark(ind);
                    }}
                  ></i>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default ToDo2