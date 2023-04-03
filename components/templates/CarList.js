import React from "react";
import styles from "./CarList.module.css";
import Card from "../module/Card";

import { useRouter } from "next/router";
import Back from "../icons/Back";
const CarList = ({ data }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card {...car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
