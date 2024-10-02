import { useSelector } from "react-redux"; //чтобы достать переменное состояние нашего массива data[]
import Item from "../item";

function List() {
  const todos = useSelector((state) => state.todo.data);
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
