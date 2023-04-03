import React from "react";
import carsData from "@/data/carsData";
import CarList from "@/components/templates/CarList";

const Hatchback = () => {
  const hatchbacks = carsData.filter((car) => car.category === "hatchback");
  return (
    <div>
      <CarList data={hatchbacks} />
    </div>
  );
};

export default Hatchback;
