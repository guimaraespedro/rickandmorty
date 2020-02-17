import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";
import Card from "../../components/Card/Card";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const Home = () => {
  const [items, setItems] = useState([{}]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);


  useEffect(() => {
    characterQuery({
      params: {
        page
      }
    }).then(res => {
      setItems(res.results);
      setPages(res.info.pages);
    });
  }, [page]);

  const handleChangePage=(event,page)=>{
    setPage(page)
  }

  return (
    <div className="home-container">
      <Typography className="home-title" variant="h5">
        What do you want to know about them? Here we have all the infos!
      </Typography>
      <div className="home-column">
        {items.map((each, index) => {
          return (
            <div className="card-container" key={index}>
              <Card info={each} />
            </div>
          );
        })}
      </div>
      <Pagination className='pagination-item' count={pages} color='primary' page={page} onChange={handleChangePage}/>
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
