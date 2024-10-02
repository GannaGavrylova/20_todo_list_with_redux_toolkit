import Form from "./components/form";
import List from "./components/list";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.data);

  console.log(todos);
  return (
    <div>
      <Form />
      <List />
    </div>
  );
}

export default App;
