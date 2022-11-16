import { useState } from "react";
import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [lists, setLists] = useState([]);

  function handleChange(e) {
    const newList = e.target.value;
    setTextInput(newList);
  }

  function addList(e) {
    setLists((prevList) => {
      return [...prevList, textInput];
    });

    setTextInput("");

    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form action="">
        <div className="form">
          <input type="text" onChange={handleChange} value={textInput} />
          <button type="submit" onClick={addList}>
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {lists.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
