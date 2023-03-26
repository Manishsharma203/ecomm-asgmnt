import React, { useEffect, useState } from "react";
import { apiCall } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../utils/types";
import Rating from "../../components/Rating";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxStore/cart.slice";
import styles from "./styles.module.css";

export default function Product() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState<IProduct | null>(null);
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const incQty = () => {
    setQty((prev) => prev + 1);
  };
  const decQty = () => {
    setQty((prev) => (prev <= 0 ? prev : prev - 1));
  };
  const addToCartClickHandler = () => {
    dispatch(addToCart({ ...productDetails, qty }));
  };
  const getSingleProduct = async (id: string) => {
    const response: any = await apiCall(
      `https://fakestoreapi.com/products/${id}`,
      "GET"
    );
    setProductDetails(response);
  };
  useEffect(() => {
    if (productId) {
      getSingleProduct(productId);
    }
  }, []);
  if (!productDetails) {
    return <Loading />;
  }
  return (
    <div className={styles.root}>
      <div style={{ flexBasis: "30%" }}>
        <img
          className={styles.img}
          src={productDetails?.image}
          alt={`product-${productDetails?.title}`}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>{productDetails?.title}</h1>
          {productDetails?.rating && (
            <Rating ratingValue={productDetails?.rating} />
          )}
        </div>
        <div className={styles.box}>
          <p style={{ color: "#3e3b3b " }}>
            Description: {productDetails?.description}
          </p>
        </div>
        <div>
          <p className={styles.tag}>{productDetails?.category}</p>
        </div>
      </div>
      <div className={styles.priceBox}>
        <div>
          <h3> ₹ {productDetails?.price}</h3>
        </div>
        <div>
          <div>Add Qty. :</div>
          <div className={styles.btnContainer}>
            {" "}
            <button onClick={decQty} className="btn btn-inc">
              -
            </button>
            <p>{qty}</p>
            <button onClick={incQty} className="btn btn-inc">
              +
            </button>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={`btn-primary ${styles.ctaButtons}`}
            onClick={addToCartClickHandler}
            disabled={qty === 0 ? true : false}
          >
            Add to Cart
          </button>

          <button
            className={`btn-secondary ${styles.ctaButtons}`}
            onClick={() => {
              dispatch(addToCart({ ...productDetails, qty: qty ? qty : 1 }));
              navigation("/cart");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
