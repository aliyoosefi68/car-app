import React from "react";
import carsData from "@/data/carsData";
import CarList from "@/components/templates/CarList";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return (
    <div>
      <CarList data={sedanCars} />
    </div>
  );
};

export default Sedan;
