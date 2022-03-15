import Hero from "../assets/home.jpg";
import homemenu from "../data/homepagedata.json";
import HomeMenuCard from "../components/HomeMenuCard";

export default function Home() {
  const HomeMenusList = homemenu.map((data) => (
    <HomeMenuCard key={data.id} data={data} />
  ));

  return (
    <div className="home_page">
      {/* semantics -1 this is the <header tag> */}
      <div className="hero_section">
        {/* This can be a background image */}
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
      {/* this can be a section tag */}
      <div className="home_list">{HomeMenusList}</div>
    </div>
  );
}
