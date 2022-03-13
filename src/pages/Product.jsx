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
      <Ingredients productDetail={productDetail} />
      <NutritionFactTable productDetail={productDetail} />
      <Link to={`/${title}`}>
        <button className="btn_primary">Go Back</button>
      </Link>
    </div>
  );
}
