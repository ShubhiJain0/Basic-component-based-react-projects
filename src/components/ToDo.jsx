import React, { useState } from 'react'

const ToDo = () => {
  const [todo, setTodo]=useState(["Sample Task"]);
  const [newTodo, setNewTodo]= useState("");
  const [done, setDone] = useState([]);
  const [ edit , setEdit] = useState(null);
    const [editcon, setEditcon] = useState("");
  function handleList(e){
    if(todo[0]==="Sample Task"){
      todo.pop();
    }
    setTodo([...todo,newTodo])
    setNewTodo("");
  }
  function handleNewTo(e){
    setNewTodo(e.target.value);
  }
  function handleDelete(ind){
    setTodo(todo.filter((_,id)=>(id!==ind))) 
  }
  function handleDone(ind){
    setDone([...done,ind]);
  }
  function handleEdit(ind){
      setEdit(ind);
      setEditcon(todo[ind]);
  }
  function handleSave(ind){
    let updated = [...todo];
    updated.splice(ind, 1, editcon);
    setTodo(updated);
    setEdit(null);
    setEditcon("");
  }
   function handleUndone(ind){
    let temp = [...done];
    temp.splice(ind, 1);
    setDone(temp)
    
   }
  return (
    <div>
      <input type="text" value={newTodo} onChange={handleNewTo} />
      <button onClick={handleList}>Add Task</button>

      <ul>
        {todo.map((list, ind = 0) =>
          edit === ind ? (
            <div>
              <input
                type="text"
                name=""
                id=""
                value={editcon}
                onChange={(e)=>{setEditcon(e.target.value)}}
              />
              <button onClick={() => handleSave(ind)}>Save</button>
            </div>
          ) : (
            <li
              id={ind}
              style={{ textDecoration: done.includes(ind) && "Line-through" }}
            >
              {list} &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => handleDelete(ind)}>Delete</button>
              <button onClick={() => handleDone(ind)}>Done</button>
              <button
                onClick={() => {
                  handleEdit(ind);
                }}
              >
                Edit
              </button>
              <button onClick={()=>handleUndone(ind)}>Undone</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ToDo