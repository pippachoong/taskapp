import React from 'react'
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    //          ^ this type is copied from App.tsx when setToDo variable is defined
}

const InputField = ({todo,setTodo}: Props) => {
//                                  ^ using interface to define the variable/argument types
  return (
    <form className="input">
        
        <input type="input"
            value={todo}
            onChange={(e)=> setTodo(e.target.value)} 
            placeholder="Enter a task"
            className="input_box"
        />
        <button className="input_submit" type="submit">
            Go
        </button>
    </form>

  )
  
}

export default InputField