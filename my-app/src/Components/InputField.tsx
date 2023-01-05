import React, {useRef} from 'react'
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    //          ^ this type is copied from App.tsx when setToDo variable is defined
    handleAdd: (e: React.FormEvent) => void // void means function returns nothing 
}

const InputField = ({todo,setTodo,handleAdd}: Props) => {
//                                  ^ using interface to define the variable/argument types
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit = {(e)=> {
        handleAdd(e)
        inputRef.current?.blur()
        }}>
        
        <input 
            ref= {inputRef}
            type="input"
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