import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ICart,
  ICartProduct,
  incrementQty,
  decrementQty,
} from "../../reduxStore/cart.slice";
import { RootState } from "../../reduxStore/store";
import styles from "./styles.module.css";

export default function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const decQty = (product: ICartProduct) => {
    dispatch(decrementQty(product));
  };
  const incQty = (product: ICartProduct) => {
    dispatch(incrementQty(product));
  };
  const totalCost = (cartItemsObject: ICart) => {
    const list = Object.values(cartItemsObject);
    const totalCostArray = list.map((e) => e.qty * e.price);
    const totalCost = totalCostArray.reduce((acc, cur) => acc + cur, 0);
    return totalCost.toFixed(2);
  };
  if (Number(totalCost(cart)) === 0) {
    return <h1 style={{ textAlign: "center" }}>No Items Added</h1>;
  }
  return (
    <div className={styles.root}>
      <div className={styles.productsContainer}>
        {Object.entries(cart).map((item: any) => (
          <div className={styles.container}>
            <div style={{ flexBasis: "10%", padding: "10px" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={item[1].image}
                alt="img"
              />
            </div>
            <div style={{ flexBasis: "30%" }}>
              <h4>{item[1].title}</h4>
              <div>In Stock</div>
              <p>₹ {item[1].price}/piece</p>
            </div>
            <div style={{ flexBasis: "40%", marginLeft: "auto" }}>
              <div className={styles.btnContainer}>
                {" "}
                <button onClick={() => decQty(item[1])} className="btn btn-inc">
                  -
                </button>
                <p>{item[1].qty}</p>
                <button onClick={() => incQty(item[1])} className="btn btn-inc">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {Number(totalCost(cart)) !== 0 && (
        <div className={styles.cartContainer}>
          <p>Total Price: {totalCost(cart)}</p>
        </div>
      )}
    </div>
  );
}
