export default function NutritionFactTable({ productDetail }) {
  const NutritionData = productDetail.nutrition.map((data) => (
    <tr key={data.id} data={data}>
      <td>{data.name}</td>
      <td>{data.value}g</td>
    </tr>
  ));

  return (
    <div className="nutrition_table">
      <h3>Nutrition Facts</h3>
      <table className="facts_table">
        <tbody>
          <tr>
            <td>Serving Size 1/2 cup </td>
            <td>Approx. 82g</td>
          </tr>
          <tr>
            <td>Serving per Container </td>
            <td>4</td>
          </tr>
          <tr>
            <td className="info">Amount Per Serving</td>
            <td>Grams</td>
          </tr>
          <tr className="table_heading">
            <td>Nutrients</td>
            <td>Value</td>
          </tr>
          {NutritionData}
        </tbody>
      </table>
    </div>
  );
}
