import React from 'react';
import './App.css';
import InputField from './Components/InputField';

// a generic interface for the functional component type.
// one of the two ways to write components in React.
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField/>
    </div>
  );
}

export default App;
