import { useParams, Link } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import NutritionFactTable from "../components/NutritionFactTable";
import ProductCard from "../components/ProductCard";
import categorydata from "../data/categorydata.json";

export default function Product() {
  const { title } = useParams();
  const { id } = useParams();
  const { products } = categorydata.find((item) => item.title === title);
  const productDetail = products.find((item) => item.id === Number(id));

  return (
    <div className="product_page">
      <ProductCard productDetail={productDetail} />
      {/* Not going to lie, this can be putted here withouth an extra component because the Product.jsx is small enough */}
      <Ingredients productDetail={productDetail} />
      {/* This one on the other hand makes sense as a separate element because the  table design should be more complex andfull of css classes */}
      <NutritionFactTable productDetail={productDetail} />
      {/* Semantics, this is not a button -1 (i mean, dont use the button tag inside the link) */}
      <Link to={`/${title}`}>
        <button className="btn_primary">Go Back</button>
      </Link>
    </div>
  );
}
