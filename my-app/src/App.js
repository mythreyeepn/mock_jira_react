import "./App.css";
import { useEffect, useState } from "react";
import data from "./data";

function App() {
  const [displayData, setDisplayData] = useState(data);
  const [todos, settodos] = useState([]);
  const [progress, setprogess] = useState([]);
  const [done, setdone] = useState([]);
  useEffect(() => {
    settodos(displayData.filter((item) => item.status === "todo"));
    setprogess(displayData.filter((item) => item.status === "inprogress"));
    setdone(displayData.filter((item) => item.status === "done"));
  }, [displayData]);

  const handleItemClick = (id, current) => {
    setDisplayData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: current === "todo" ? "inprogress" : "done",
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      <div>
        <span>To Do</span>
        {todos &&
          todos.length > 0 &&
          todos.map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() => handleItemClick(item.id, "todo")}
              >
                {item.name}
              </div>
            );
          })}
      </div>
      <div>
        <span>In Progress</span>
        {progress &&
          progress.length > 0 &&
          progress.map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() => handleItemClick(item.id, "inprogress")}
              >
                {item.name}
              </div>
            );
          })}
      </div>
      <div>
        <span>Done</span>
        {done &&
          done.length > 0 &&
          done.map((item, index) => {
            return (
              <div className="item" key={index}>
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
