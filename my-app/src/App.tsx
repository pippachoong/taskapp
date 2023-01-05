import React, { useState, useSyncExternalStore } from 'react';
import './App.css';
import InputField from './Components/InputField';

// a generic interface for the functional component type.
// one of the two ways to write components in React.
const App: React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  //                                ^ type of useState is defined. it can have union like < string | number >
  console.log(todo);
  

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
