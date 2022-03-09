export default function NutritionFactTable({ product }) {
  return (
    <section className="nutrition_facts">
      <div className="facts_header">
        <h2 className="facts_title">Nutrition Facts</h2>
        <p>Serving Size 1/2 cup (about 82g)</p>
        <p>Serving Per Container 8</p>
      </div>
      <table class="facts__table">
        <thead>
          <tr>
            <th className="small_info">Amount Per Serving</th>
          </tr>
        </thead>
      </table>
    </section>
  );
}
