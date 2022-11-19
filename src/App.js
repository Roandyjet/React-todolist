import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import List from "./components/List";

function App() {
  const [lists, setLists] = useState([]);

  function addList(inputText) {
    setLists((prevLists) => {
      return [...prevLists, inputText];
    });

    // event.preventDefault();
  }

  function deleteList(id) {
    setLists((prevLists) => {
      return prevLists.filter((list, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addList} />
      <div>
        <ul>
          {lists.map((list, index) => (
            <List key={index} id={index} text={list} onChecked={deleteList} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
