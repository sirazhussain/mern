"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = React.memo(function ProductList() {
  const [products, setProducts] = useState<any[]>([]); // Specify any[] as the type

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any[] = await response.json(); // Specify any[] as the type

        setProducts(data); // No need to check for array type since data is explicitly typed as any[]
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="text-center my-20">
      <div className="text-3xl my-10"> Products</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((item, key) => (
          <ProductCard key={key} productData={item} />
        ))}
      </div>
    </div>
  );
});

export default ProductList;
