import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../utils/types";

export interface ICartProduct extends IProduct{
    qty:number
}
export interface ICart{
    [id : string]:ICartProduct
}
interface IinitialLState{
    cart:ICart
}
const initialState: IinitialLState = {
    cart:{}
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item=state.cart[action.payload.id]
        if(item){
            item.qty=item.qty+action.payload.qty
            state.cart[item.id]=item
        }
        else{
            state.cart[action.payload.id]=action.payload
        }
      },
      incrementQty:(state, action) => {
        const item=state.cart[action.payload.id]
        if(item){
            item.qty++
            state.cart[item.id]=item
        }
      },
      decrementQty:(state, action) => {
        const item=state.cart[action.payload.id]
        if(item.qty>0){
            item.qty--
            state.cart[item.id]=item
        }
         if(item.qty===0){
            const data=state.cart
            const itemId=action.payload.id
            const {[itemId]:id,...restItems}=data
            state.cart=restItems
        }
      },
  },
});

export const {
    addToCart,incrementQty,decrementQty
} = cartSlice.actions;

export default cartSlice.reducer;
