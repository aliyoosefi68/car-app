import React from "react";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import CarList from "@/components/templates/CarList";

const FiltersCar = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  console.log(min, max);

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filteredData.length) return <h3>Not Found</h3>;
  return (
    <div>
      <CarList data={filteredData} />
    </div>
  );
};

export default FiltersCar;
