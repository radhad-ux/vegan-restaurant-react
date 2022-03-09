export default function Ingredients({ productDetail }) {
  const ingredientsList = productDetail.ingredients.map((data, index) => (
    <li key={index}>{data}</li>
  ));
  return (
    <div className="ingredients_list">
      <h2>Ingredients</h2>
      <ul className="ingredients_data">{ingredientsList}</ul>
    </div>
  );
}
