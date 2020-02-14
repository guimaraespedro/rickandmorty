import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";

const Home = () => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    characterQuery({params: {
      name:"Rick"
  }}).then(res => {
      setItems(res.results);
    });
  }, []);
  return (
    <div className="home-container">
      {items.map((each, index) => {
        return (
          <div key={index}>
            <img src={each.image} alt={each.name}/>
            <p>{each.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
