import { Route, Routes } from "react-router-dom";
import AddToDo from "../pages/add-todo/add-todo";
import ToDoList from "../pages/todo-list/todo-list";
const Router = () => {
  return (
    <div className="mt-10">
      <Routes>
        <Route path="/add-todo" element={<AddToDo />} />
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </div>
  );
};
export default Router;
