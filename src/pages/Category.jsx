import { useParams } from "react-router-dom";
import categorydata from "../data/categorydata.json";
import CategoryCard from "../components/CategoryCard";

// excellent
// really good idea of putting the destructuring like this. To make 1 line you can experiment with
export default function Category() {
  const { title } = useParams();
  const { description, products } = getCategory(categorydata, title);

  // Method
  function getCategory(categories, category) {
    return categories.find((item) => item.title === category);
  }

  // Components
  const CategoryList = products.map((data) => (
    <CategoryCard key={data.id} data={data} />
  ));

  return (
    <div className="category_page">
      {/* Semantics -1, hey what happened here? You are literally, literally calling this category_header */}
      <div className="category_header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* this can be a section */}
      <div className="category_list">{CategoryList}</div>
    </div>
  );
}
