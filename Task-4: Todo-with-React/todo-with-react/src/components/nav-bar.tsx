import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="w-full flex justify-center items-center p-5 text-white">
      <ul className="flex gap-6">
        <li
          className={`${
            pathname === "/" ? "border-b-2 border-orange-400" : ""
          }`}
        >
          <Link to="/">Todo List</Link>
        </li>
        <li
          className={`${
            pathname === "/add-todo" ? "border-b-2 border-orange-400" : ""
          }`}
        >
          <Link to="/add-todo">Add Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
