import React from "react";
import { motion } from "framer-motion";

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      <span
        onClick={() => onToggle(task.id)}
        className={`task-text ${task.completed ? "completed-text" : ""}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </motion.div>
  );
}
