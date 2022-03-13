import { Link } from "react-router-dom";

export default function CategoryCard({ data }) {
  const { id, shortDescription, name, image } = data;
  const imageURL = require(`../assets/images/products/${image}`);

  return (
    <div className="card_content">
      <div className="card_left">
        <img src={imageURL} alt="product" />
      </div>
      <div className="card_right">
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        <Link to={`./${id}`}>
          <button className="btn_primary">view details</button>
        </Link>
      </div>
    </div>
  );
}
