import React from 'react'; // Import React
import './App.css'; // Import CSS file
import { Createtodo } from "./components/createtodo.jsx"; 
import { Todos } from "./components/todos.jsx";

function App() {
  return (
    <div>
      <Createtodo />
      <Todos />
    </div>
  );
}

export default App;

