import React, { useState } from 'react'; // Import React and useState hook

export function CreateTodo() { // Use PascalCase for component names
  const [title, setTitle] = useState(""); // State for todo title
  const [description, setDescription] = useState(""); // State for todo description

  return (
    <div>
      <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder="Title" 
        value={title} // Bind input value to title state
        onChange={(e) => setTitle(e.target.value)} // Update title state on input change
      /><br />
      <input 
        type="text" 
        id="description" 
        name="description" 
        placeholder="Description" 
        value={description} // Bind input value to description state
        onChange={(e) => setDescription(e.target.value)} // Update description state on input change
      /><br />
      <button>add todo</button>
    </div>
  );
}

