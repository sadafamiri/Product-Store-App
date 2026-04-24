import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./productsAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);