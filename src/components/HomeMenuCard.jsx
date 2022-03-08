import React from "react";
import { Link } from "react-router-dom";

export default function HomeMenuCard({ data }) {
  const { title, description, image } = data;
  const imageURL = require(`../assets/images/homepics/${image}`);

  return (
    <div className="menu_item">
      <div className="menu_left">
        <img
          className="menu_img"
          src={imageURL}
          alt="main dish, desert and drink"
        />
      </div>
      <div className="menu_right">
        <h2>{title}</h2>
        <p className="menu_description">{description}</p>
        <Link to={`${title}`}>
          <button className="btn_primary">view menu</button>
        </Link>
      </div>
    </div>
  );
}
