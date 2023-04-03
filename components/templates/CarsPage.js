import React from "react";
import Card from "../module/Card";
import styles from "./CarsPage.module.css";
const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card {...car} key={car.id} />
      ))}
    </div>
  );
};

export default CarsPage;
