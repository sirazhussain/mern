import React from "react";


interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sold: boolean;
  dateOfSale: string;
}


interface ProductCardProps {
  productData: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  const { id, title, price, description, category, image, sold, dateOfSale } = productData;

  return (
    <div className="border rounded p-4">
      <img src={image} alt={title} className="w-full mb-4" />
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="mb-2">${price}</div>
      <div className="text-gray-600 mb-4">{description}</div>
      <div className="mb-2">{category}</div>
      <div className="mb-2">{sold ? "Sold" : "Available"}</div>
      <div className="text-sm text-gray-500">{dateOfSale}</div>
    </div>
  );
};

export default ProductCard;
