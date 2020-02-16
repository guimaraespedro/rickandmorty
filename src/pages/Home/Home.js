import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";
import ContentCard from "../../components/Card/Card";
import { Typography } from "@material-ui/core";

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
      <Typography className='home-title' variant='h4'>
          What do you want to know about them? Here we have all the infos!
        </Typography>
      <div className="home-column">
        {items.map((each, index) => {
          return (
            <div className="card-container">
          <ContentCard info={each}/>
          </div>
          )
        })}
      </div>
    </div>
  );
};

// "id": 1,
//       "name": "Rick Sanchez",
//       "status": "Alive",
//       "species": "Human",
//       "type": "",
//       "gender": "Male",
//       "origin": {
//         "name": "Earth (C-137)",
//         "url": "https://rickandmortyapi.com/api/location/1"
//       },
//       "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//       },
//       "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       "episode": [
//         "https://rickandmortyapi.com/api/episode/1",
//         "https://rickandmortyapi.com/api/episode/2",

export default Home;
