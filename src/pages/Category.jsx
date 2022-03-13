import { useParams } from "react-router-dom";
import categorydata from "../data/categorydata.json";
import CategoryCard from "../components/CategoryCard";

export default function Category() {
  const { title } = useParams();
  const { description, products } = categorydata.find(
    (item) => item.title === title
  );

  const CategoryList = products.map((data) => (
    <CategoryCard key={data.id} data={data} />
  ));

  return (
    <div className="category_page">
      <div className="category_header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="category_list">{CategoryList}</div>
    </div>
  );
}
