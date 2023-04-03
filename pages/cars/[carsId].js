import React from "react";
import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/templates/CarDetails";

const carsId = () => {
  const router = useRouter();
  const { carsId } = router.query;
  const carDetails = carsData[carsId - 1];
  return (
    <div>
      <CarDetails {...carDetails} />
    </div>
  );
};

export default carsId;
