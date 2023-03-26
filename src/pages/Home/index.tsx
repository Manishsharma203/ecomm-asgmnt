import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import { setProductsList } from "../../reduxStore/products.slice";
import { apiCall } from "../../utils/utils";
import styles from "./styles.module.css";

export default function Home() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    navigation("/products-list");
  };

  return (
    <div>
      <Carousel />
      <div
        style={{ display: "flex", margin: "20px", justifyContent: "center" }}
      >
        <button className="btn btn-special" onClick={clickHandler}>
          All Products
        </button>
      </div>
    </div>
  );
}
