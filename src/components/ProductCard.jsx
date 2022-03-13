export default function ProductCard({ productDetail }) {
  const { name, longDescription, image } = productDetail;
  const imageURL = require(`../assets/images/products/${image}`);

  return (
    <div className="product_header">
      <img src={imageURL} alt="product" />
      <h2>{name}</h2>
      <p>{longDescription}</p>
    </div>
  );
}
