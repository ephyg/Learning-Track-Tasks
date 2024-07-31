import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const url = "https://6534de61e1b6f4c59046fe81.mockapi.io/yenetta/Product";
interface TodoCardProps {
  id: string;
  product_name: string;
  product_description: string;
  price: number;
  quantity: number;
}
const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editedData, setEditedData] = useState({
    id: "",
    product_name: "",
    product_description: "",
    price: 0,
    quantity: 0,
  });
  const handleEdit = (items: TodoCardProps) => {
    setEditedData({
      id: items.id,
      product_name: items.product_name,
      product_description: items.product_description,
      price: items.price,
      quantity: items.quantity,
    });
    setEdit(true);
  };
  const handleEditButton = async () => {
    const res = await fetch(`${url}/${editedData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    const data = await res.json();
    console.log(data);
    setEdit(false);
    fetchdata();
  };
  const handleDelete = async () => {
    const res = await fetch(`${url}/${deleteId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    setDeleteModal(false);
    fetchdata();
  };
  const fetchdata = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTodos(data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="text-primary">
      <div className="flex flex-col justify-center items-center gap-3">
        {todos.map((items: TodoCardProps, index: number) => (
          <div
            key={index}
            className="w-1/2 flex justify-between border px-5 py-5 cursor-pointer hover:border-orange-400 rounded-xl"
          >
            <div className="px-5 gap-2  w-full">
              <h1 className="text-xl font-bold">{items.product_name}</h1>
              <p className="mb-2">{items.product_description}</p>
              <div className="flex justify-between">
                <p className="text-accent1">{items.quantity} items</p>
                <h2 className="text-xl">{items.price}$</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 pl-5">
              <FaEdit
                size={24}
                className="text-green-500 hover:text-green-700"
                onClick={() => handleEdit(items)}
              />
              <MdDelete
                size={24}
                onClick={() => {
                  setDeleteModal(true);
                  setDeleteId(items.id);
                }}
                className="text-red-500 hover:text-red-700"
              />
            </div>
          </div>
        ))}
      </div>
      {edit && (
        <form
          onSubmit={handleEditButton}
          className="fixed inset-0 p-4 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] "
        >
          <div className="flex bg-background p-10 max-w-2xl w-full flex-col rounded-xl">
            <div className="flex justify-between w-full mb-10">
              <h1 className="text-2xl font-bold">Edit Item</h1>
              <FaX
                size={20}
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={() => setEdit(false)}
              />
            </div>
            <div className="flex gap-5 mb-14 h-full">
              <div className="flex-1 flex flex-col gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-sm ">Product Name</span>
                  <input
                    value={editedData.product_name}
                    type="text"
                    placeholder="Apple iPhone 13"
                    className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                    required
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        product_name: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm ">Product Price</span>
                  <input
                    value={editedData.price}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        price: Number(e.target.value),
                      })
                    }
                    required
                    type="number"
                    placeholder="Apple iPhone 13"
                    className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm ">Product Quantity</span>
                  <input
                    value={editedData.quantity}
                    required
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        quantity: Number(e.target.value),
                      })
                    }
                    type="number"
                    placeholder="Apple iPhone 13"
                    className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                  />
                </label>
              </div>
              <div className="flex-1 flex flex-col ">
                <label className="flex flex-col gap-1 min-h-full ">
                  <span className="text-sm ">Product Description</span>
                  <textarea
                    value={editedData.product_description}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        product_description: e.target.value,
                      })
                    }
                    required
                    placeholder="Apple iPhone 13"
                    className="outline-none bg-transparent border-orange-100 border p-5 text-sm  rounded-lg flex-grow flex"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary h-10 rounded-lg hover:bg-[#0d4044] mb-4"
            >
              Update
            </button>
          </div>
        </form>
      )}
      {deleteModal && (
        <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] ">
          <div className="flex bg-background p-10 max-w-lg w-full flex-col rounded-xl">
            <div className="flex justify-between w-full ">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                Are you sure?
              </h2>
              <FaX
                onClick={() => setDeleteModal(false)}
                size={20}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              />
            </div>
            <div className="flex h-full flex-col">
              <p className="mb-6">
                This action cannot be undone. This will permanently delete the
                item.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
