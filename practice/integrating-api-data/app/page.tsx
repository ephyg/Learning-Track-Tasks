// "use client";
import Items from "@/component/Items";
import { useGetProductsQuery } from "@/redux/slice/api";
import { ProductType } from "@/redux/slice/dataSlice";
import Link from "next/link";
import { Suspense } from "react";
import { useSelector } from "react-redux";

interface RootState {
  product_: ProductType[];
  productsApi: any;
}
export default function Home() {
  // const data = useSelector((state: RootState) => state.product_);

  return (
    <div className="min-h-screen w-full justify-center items-center">
      <div className="flex flex-col gap-20">
        <h1 className="text-center"></h1>
        {/* <Items /> */}
        <div className="flex gap-5">
          <Link
            href="/api/auth/callback/google"
            className="bg-blue-500 px-10 py-1 rounded"
          >
            Login
          </Link>
          <Link
            href="/api/auth/callback/google"
            className="bg-blue-500 px-10 py-1 rounded"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
