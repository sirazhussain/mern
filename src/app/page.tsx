import React from "react";
import ProductList from "@/app/components/ProductList";
const Phone = React.memo(function Phone() {
  return (
    <>
      <ProductList />
    </>
  );
});

export default Phone;
