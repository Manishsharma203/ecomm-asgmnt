import React from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../utils/types";
import styles from "./styles.module.css";

interface IProps {
  product: IProduct;
}
export default function ProductCard(props: IProps) {
  const { product } = props;
  const navigation = useNavigate();
  const clickHandler = (productId: number) => {
    navigation(`/product/${productId}`);
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h5>{product.title}</h5>
        <img src={product.image} className={styles.cardImg} alt="product" />
      </div>
      <div style={{ padding: "5px" }}>
        <p>Category: {product.category}</p>
        <p>Price: Rs.{product.price}</p>
        <p>Rating: {product.rating.rate}/5</p>
        <button
          className="btn-primary"
          onClick={() => clickHandler(product.id)}
        >
          See More...
        </button>
      </div>
    </div>
  );
}
