import React from "react";

// We can't modify our props but we can have state in this component
const List = (props) => {
  // __________The commented ones are for linethrough______________
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  // setIsDone((prevValue) => {
  //   return !prevValue;
  // });
  // }

  return (
    // We can put onClick in the div on in the li
    // We call the function right away with props.id if we code like this : <div onClick={props.onChecked(props.id)}>
    // Instead, we can create another function inside onClick so that it only exe after onClick event

    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* <li style={{ textDecoration: isDone && "line-through" }}>{props.text}</li> */}
      <li>{props.text}</li>
    </div>
  );
};

export default List;
