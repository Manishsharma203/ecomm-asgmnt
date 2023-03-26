import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JsonObjectExpression } from "typescript";
import { setProductsList } from "../../reduxStore/products.slice";
import { RootState } from "../../reduxStore/store";
import { IProduct } from "../../utils/types";
import { apiCall } from "../../utils/utils";
import ProductsListing from "./components/ProductsListing";
import styles from "./styles.module.css";

export default function ProductsList() {
  const { productsList } = useSelector((state: RootState) => state.products);
  const [productsDisplay, setProductsDisplay] = useState<
    IProduct[] | undefined
  >(undefined);
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    try {
      const response = await apiCall(
        "https://fakestoreapi.com/products",
        "GET"
      );
      if (response) {
        dispatch(setProductsList(response));
      }
    } catch (err) {
      return { err };
    }
  };
  useEffect(() => {
    if (productsList && productsList.length) {
      setProductsDisplay(productsList);
    }
  }, [productsList]);

  useEffect(() => {
    const res = getAllProducts();
  }, []);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const items = productsList?.filter((e) => e.title.includes(value));
    setProductsDisplay(items);
  };
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div>
          <input
            className="input"
            type="text"
            onChange={changeHandler}
            placeholder="🔍  search products"
          />
        </div>
      </div>
      <div style={{ flexBasis: "80%" }}>
        <ProductsListing productsDisplay={productsDisplay} />
      </div>
    </div>
  );
}
