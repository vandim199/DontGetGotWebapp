import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./TaskElement";
import questsJson from "./assets/quests.json"; // This import style requires "esModuleInterop", see "side notes"
import TaskElement from "./TaskElement";
console.log(questsJson.quests);

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    rerollTasks();
  }, []);

  function rerollTasks() {
    const allTasks = questsJson.quests.flatMap((quest) => quest as string[]);
    const count = Math.min(5, allTasks.length);
    const shuffled = [...allTasks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const questTasks = shuffled.slice(0, count);
    setTasks(questTasks);
  }

  //TODO: Make this data persistent across reloads using localStorage

  return (
    <>
      <div className="h-screen w-screen">
        <div className="align-center flex flex-col justify-center items-center min-h-screen bg-gray-800">
          <h1 className="text-5xl font-bold text-white">Don't Get Got</h1>
          <div>
            <ul className="rounded border-radius-lg p-4">
              {tasks.map((taskText, index) => (
                <TaskElement key={index} taskText={taskText} />
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
              onClick={() => rerollTasks()}
            >
              Reroll
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
