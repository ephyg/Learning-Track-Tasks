import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "https://6534de61e1b6f4c59046fe81.mockapi.io/yenetta/Product";

const AddToDo = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    price: 0,
    quantity: 0,
  });
  const handleAddTodo = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
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
            <h1 className="text-2xl font-bold">Add Product</h1>
          </div>
          <div className="flex gap-5 mb-14 h-full">
            <div className="flex-1 flex flex-col gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-sm ">Product Name</span>
                <input
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, product_name: e.target.value })
                  }
                  placeholder="Apple iPhone 13"
                  className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm ">Product Price</span>
                <input
                  type="number"
                  onChange={(e) =>
                    setProduct({ ...product, price: Number(e.target.value) })
                  }
                  placeholder="Apple iPhone 13"
                  className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm ">Product Quantity</span>
                <input
                  type="number"
                  onChange={(e) =>
                    setProduct({ ...product, quantity: Number(e.target.value) })
                  }
                  placeholder="Apple iPhone 13"
                  className="outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10"
                />
              </label>
            </div>
            <div className="flex-1 flex flex-col ">
              <label className="flex flex-col gap-1 min-h-full">
                <span className="text-sm ">Product Description</span>
                <textarea
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      product_description: e.target.value,
                    })
                  }
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToDo;
