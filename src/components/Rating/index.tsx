import React from "react";
import { IRating } from "../../utils/types";
import styles from "./styles.module.css";
interface IProps {
  ratingValue: IRating;
}
export default function Rating(props: IProps) {
  const { ratingValue } = props;
  return (
    <div className={styles.root}>
      <div className={styles.star}>{ratingValue.rate} ★</div>
      <div>Reviews: {ratingValue.count}</div>
    </div>
  );
}
