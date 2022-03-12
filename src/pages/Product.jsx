import React from "react";
import categorydata from "../data/categorydata.json";
import ProductCard from "../components/ProductCard";
import Ingredients from "../components/Ingredients";
import { useParams } from "react-router-dom";
import NutritionFactTable from "../components/NutritionFactTable";
import { Link } from "react-router-dom";

export default function Product() {
  const { title } = useParams();
  const { id } = useParams();

  const { products } = categorydata.find((item) => item.title === title);
  const productDetail = products.find((item) => item.id === Number(id));

  return (
    <div className="product_page">
      <ProductCard productDetail={productDetail} />
      <Ingredients productDetail={productDetail} />
      <NutritionFactTable productDetail={productDetail} />
      <Link to={`/${title}`}>
        <button className="btn_primary">Go Back</button>
      </Link>
    </div>
  );
}
