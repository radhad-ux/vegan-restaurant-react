// ok
export default function Ingredients({ productDetail }) {
  const ingredientsList = productDetail.ingredients.map((data, index) => (
    <li key={index}>{data}</li>
  ));
  return (
    <div className="ingredients_list">
      <h3>Ingredients</h3>
      <ul className="ingredients_data">{ingredientsList}</ul>
    </div>
  );
}
