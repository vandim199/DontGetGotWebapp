import React, { useState } from "react";

interface Props {
  taskText: string;
}

function TaskElement({ taskText }: Props) {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted((prev) => !prev);
    console.log(`Task "${completed}" marked as complete.`);
  };

  return (
    <li
      //key={index}
      className="relative p-4 bg-slate-700 rounded-lg shadow-md m-4 flex flex-row justify-between items-center overflow-hidden"
    >
      {/* green swipe overlay */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-green-600 rounded-lg transform origin-left transition-transform duration-500 ${
          completed ? "scale-x-100" : "scale-x-0"
        }`}
      />

      {/* content above overlay */}
      <div className="relative z-20 flex-1">
        <h2 className={`text-white ${completed ? "line-through" : ""}`}>
          {taskText}
        </h2>
      </div>

      {/* green tick button */}
      <button
        type="button"
        onClick={handleComplete}
        //disabled={completed}
        aria-pressed={completed}
        aria-label="Mark task complete"
        className={`relative z-20 ml-4 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors ${
          completed
            ? "bg-green-700 opacity-80"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //width="16"
          //height="16"
          //fill="currentColor"
          className="w-5 h-5 text-white"
          viewBox="0 0 16 16"
        >
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
        </svg>
      </button>
    </li>
  );
}

export default TaskElement;
