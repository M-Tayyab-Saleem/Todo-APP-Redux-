import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo} from '../features/todo/todoSlice'
import "./Todo.css"

const Todo = () => {
  let [value, setValue] = useState("")
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
    let submithandler =(event)=>{
      event.preventDefault()
      if(value){
        dispatch(addTodo({task:value}))
      }
    }
    const deletetodo = (elID) =>{
      dispatch(deleteTodo({id:elID}))
    }
  return (
    
    <div>
      <form onSubmit={submithandler}>
        <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button>Add</button>
        </form>
        <ul>
            {todos.map((el)=>(<li key={el.id}>{el.task} <button onClick={deletetodo(el.id)}>Delete</button></li>))}
        </ul>
        
    </div>
  )
}

export default Todo