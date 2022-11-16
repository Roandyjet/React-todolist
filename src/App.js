import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [textInput, setTextInput] = useState("");
  const [lists, setLists] = useState([]);

  function handleChange(e) {
    const newList = e.target.value;
    setTextInput(newList);
  }

  function addList(e) {
    setLists((prevLists) => {
      return [...prevLists, textInput];
    });

    setTextInput("");

    e.preventDefault();
  }

  function deleteItem(id) {
    setLists((prevLists) => {
      return prevLists.filter((item, index) => {
        return index !== id;
      });
    });
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
            return (
              <List text={list} key={index} id={index} onChecked={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
