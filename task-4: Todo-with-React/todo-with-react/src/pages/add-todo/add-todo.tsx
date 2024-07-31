import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "https://66aa7e66636a4840d7c7d052.mockapi.io/todo/todo";

const AddToDo = () => {
  const navigate = useNavigate();
  const date: Date = new Date();
  const year: string = date.getUTCFullYear().toString();
  const month = String(date.getUTCMonth() + 1)
    .padStart(2, "0")
    .toString(); // Months are 0-indexed
  const day = String(date.getUTCDate()).padStart(2, "0").toString();
  const formattedDate = `${year}-${month}-${day}`;
  const [todos, setTodos] = useState({
    created_at: formattedDate,
    task_name: "",
    task_description: "",
    due_date: "",
    id: "",
  });
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todos),
    });
    navigate("/");
  };
  return (
    <div className="text-white">
      <div className="flex w-full justify-center items-center ">
        <form
          onSubmit={handleAddTodo}
          className="flex bg-background p-10 max-w-2xl w-full flex-col rounded-xl border"
        >
          <div className="flex justify-between w-full mb-10">
            <h1 className="text-2xl font-bold">Add Todo</h1>
          </div>
          <div className="flex gap-5 mb-14 h-full">
            <div className="flex-1 flex flex-col gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-sm ">Task Name</span>
                <input
                  type="text"
                  onChange={(e) =>
                    setTodos({ ...todos, task_name: e.target.value })
                  }
                  placeholder="Apple iPhone 13"
                  className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm ">Task Due Date</span>
                <input
                  type="date"
                  onChange={(e) =>
                    setTodos({ ...todos, due_date: e.target.value })
                  }
                  placeholder="2024-08-01"
                  className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                />
              </label>
            </div>
            <div className="flex-1 flex flex-col ">
              <label className="flex flex-col gap-1 min-h-full">
                <span className="text-sm ">Product Description</span>
                <textarea
                  onChange={(e) =>
                    setTodos({
                      ...todos,
                      task_description: e.target.value,
                    })
                  }
                  placeholder="todos desciption"
                  className="outline-none bg-transparent border-orange-100 border p-5 text-sm  rounded-lg flex-grow flex"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary h-10 rounded-lg hover:bg-[#0d4044] mb-4"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToDo;
