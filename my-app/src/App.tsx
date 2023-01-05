import React, { useState, useSyncExternalStore } from 'react';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import {Todo} from "./model"

// a generic interface for the functional component type.
// one of the two ways to write components in React.
const App: React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  //                                      ^ initial value of empty
  //                                ^ type of useState is defined. it can have union like < string | number >
  const [todos,setTodos] = useState<Todo[]>([])
  //                                  ^ import the model that created that has an interface defined for Todo.
  //                                  ^ <Todo[]> this is how create an array of a type/interface
  console.log(todo);
  
  const handleAdd = (e: React.FormEvent) => {
    //                  ^ need to specify type for event variable in this function 
    e.preventDefault();

    if (todo){
      setTodos([...todos,{ id: Date.now(), todo, isDone:false}])
      setTodo("")
    }

  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
