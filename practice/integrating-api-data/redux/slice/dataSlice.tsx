import { createSlice } from "@reduxjs/toolkit";
import { get } from "http";

export interface ProductType {
  id: number;
  name: string;
}


const initialState: ProductType[] = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      return state;
    },
  },
});

export const { getData } = dataSlice.actions;
