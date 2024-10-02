import { useState } from "react";
import { addTodo } from "../../redux/slices/todoSlice";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { notification } from "antd";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    title &&
      dispatch(
        addTodo({
          id: uid(),
          title,
          completed: false,
        })
      );
    setTitle("");
  }

  const openNotification = (id, title) => {
    notification.open({
      message: "New task added",
      description: `Task ID: ${id}, Task Name: ${title}`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <>
      {/* {contextHolder} */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new todo"
        />
        <input type="submit" value={"Add todo"} onClick={openNotification} />
      </form>
    </>
  );
}

export default Form;
