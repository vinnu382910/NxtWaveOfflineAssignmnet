// components/TaskInput.jsx
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import './index.css'

export default function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="addTask-cont">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="addTask-input"
      />
      <button
        type="submit"
        className="add-btn"
      >
         <CiCirclePlus className="icon" />Add
      </button>
    </form>
  );
}
