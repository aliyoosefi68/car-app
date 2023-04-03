import React from "react";
import styles from "./Card.module.css";

//icons
import Location from "../icons/Location";
import Link from "next/link";
const Card = (props) => {
  const { image, name, model, year, distance, price, category, location, id } =
    props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} alt={name} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detailes}>{`${year} - ${distance}km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
