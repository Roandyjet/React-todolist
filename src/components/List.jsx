import React from "react";

const List = (props) => {
  //   const [isDone, setIsDone] = useState(false);

  //   function handleClick() {
  //     setIsDone((prevValue) => {
  //       return !prevValue;
  //     });
  //   }

  return (
    <li
      //   style={{ textDecoration: isDone && "line-through" }}
      //   key={props.index}

      //   The id will be called right away if the following code is fired
      //   onClick={props.onChecked(props.id)} instead, use a function:

      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
};

// h2{textDecoration: "line-through"}

export default List;
