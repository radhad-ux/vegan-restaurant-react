import React from "react";
import Hero from "../assets/home.jpg";
import homemenu from "../data/homepagedata.json";
import HomeMenuCard from "../components/HomeMenuCard";

export default function Home() {
  const CategoryList = homemenu.map((data) => (
    <HomeMenuCard key={data.id} data={data} />
  ));

  return (
    <div className="home_page">
      <div className="hero_section">
        <img
          className="hero_img"
          src={Hero}
          alt="vegan food with blue background "
        />
        <div className="hero_content">
          <h1>The Green Alley</h1>
          <span>Eat beet, not meat!</span>
        </div>
      </div>
      <div className="home_list">{CategoryList}</div>
    </div>
  );
}
