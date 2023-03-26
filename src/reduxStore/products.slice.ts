import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../utils/types";

interface IinitialLState{
    productsList:IProduct[]
}
const initialState: IinitialLState = {
    productsList:[]
};

const procuctsSlice = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setProductsList: (state, action) => {
        state.productsList = action.payload;
      },
  },
});

export const {
    setProductsList
} = procuctsSlice.actions;

export default procuctsSlice.reducer;
