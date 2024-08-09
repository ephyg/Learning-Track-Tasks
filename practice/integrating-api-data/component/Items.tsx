import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/slice/api";
import React from "react";

const Items = () => {
  const { data = [], isLoading,isError,} = useGetProductsQuery("getProducts");


  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {data.map((product: any) => (
        <span key={product.id} className="py-5">
          {product.name}
        </span>
      ))}
    </div>
  );
};

export default Items;
