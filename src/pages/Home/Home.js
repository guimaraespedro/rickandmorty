import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";
import ContentCard from "../../components/Card/Card";

const Home = () => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    characterQuery({
      params: {
        name: "Rick"
      }
    }).then(res => {
      setItems(res.results);
    });
  }, []);
  return (
    <div className="home-container">
      <div className="home-column">
        {items.map((each, index) => {
          return <ContentCard title={each.name} image={each.image} />;
        })}
      </div>
    </div>
  );
};

export default Home;
