import React, { useState } from "react";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newList = event.target.value;
    setInputText(newList);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        type="submit"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
