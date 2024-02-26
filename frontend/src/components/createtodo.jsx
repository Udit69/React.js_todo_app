import React from 'react'; // Import React

export function Createtodo() { // Use PascalCase for component names
  return (
    <div>
      <input type="text" id="todo" name="todo" placeholder="Title" /><br />
      <input type="text" id="todo" name="todo" placeholder="description" /><br />

      <button>add todo</button>
    </div>
  );
}
