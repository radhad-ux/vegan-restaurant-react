import { Link } from "react-router-dom";

export default function CategoryCard({ data }) {
  const { id, shortDescription, name, image } = data;
  const imageURL = require(`../assets/images/products/${image}`);

  // A tip here,
  // Don't use card_left and card_right, because the position only work on desktop devices.
  // So instead use the contents as the name. card_header and card_contet or card_body
  return (
    <div className="card_content">
      {/* header -1 */}
      <div className="card_left">
        <img src={imageURL} alt="product" />
      </div>
      <div className="card_right">
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        {/* -1 dont use button inside link or viceversa */}
        <Link to={`./${id}`}>
          <button className="btn_primary">view details</button>
        </Link>
      </div>
    </div>
  );
}
