import { removeTodo, toggleCompleteTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import React from "react";

function Item({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span
        style={{
          color: completed ? "blue" : "green",
        }}
      >
        {title}
      </span>
      <button onClick={() => dispatch(toggleCompleteTodo(id))}>
        Completed
      </button>
      <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </div>
  );
}

export default Item;
