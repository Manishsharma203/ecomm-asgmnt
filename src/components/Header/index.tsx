import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../reduxStore/store";
import styles from "./styles.module.css";

export default function Header() {
  const navigation = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const goToCart = () => {
    navigation("/cart");
  };
  const totalProducts = () => {
    const items = Object.values(cart).map((e) => e.qty);
    const totalItems = items.reduce((a, c) => a + c, 0);
    return totalItems;
  };
  return (
    <div className={styles.root}>
      <div>
        <button className="btn" onClick={() => navigation("/")}>
          <h2>ECOMM</h2>
        </button>
      </div>
      <div className={styles.flex}>
        <button
          style={{ position: "relative" }}
          className="btn iconButton"
          onClick={goToCart}
        >
          {totalProducts() !== 0 && (
            <div className={styles.notif}>{totalProducts()}</div>
          )}
          <img
            style={{ height: "inherit" }}
            src="/assets/shopping-cart.png"
            alt="Shopping cart icons created by Freepik - Flaticon"
          />
        </button>
      </div>
    </div>
  );
}
