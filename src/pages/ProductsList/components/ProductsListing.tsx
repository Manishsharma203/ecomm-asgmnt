import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/ProductCard";
import { RootState } from "../../../reduxStore/store";
import { IProduct } from "../../../utils/types";
import styles from "../styles.module.css";

interface IProps {
  productsDisplay: IProduct[] | undefined;
}
export default function ProductsListing(props: IProps) {
  const { productsDisplay } = props;
  if (!productsDisplay) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.root}>
      {productsDisplay.map((product: IProduct) => (
        <div key={product.id} style={{ flexBasis: "30%" }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
