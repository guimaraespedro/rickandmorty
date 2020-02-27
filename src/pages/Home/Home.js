import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";
import Card from "../../components/Card/Card";
import { Typography, InputBase } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory, useParams } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Home = () => {
  const [items, setItems] = useState();
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(0);
  //const [search,setSearch] = useState('');
  let { id } = useParams();
  const [page, setPage] = useState(id ? id : 1);
  let history = useHistory();

  useEffect(() => {
    setLoading(1);
    characterQuery({
      params: {
        page
      }
    })
      .then(res => {
        setItems(res.results);
        setPages(res.info.pages);
        setLoading(0);
      })
      .catch(error => {});
  }, [page]);

  const handleChangePage = (event, page) => {
    history.push(`/home/${page}`);
    setPage(page);
  };

  return (
    <>
      <div className="home-container">
        <Typography className="home-title" variant="h5">
          What do you want to know about them? Here we have all the infos!
        </Typography>
        <div className="search-input-container">
          <SearchIcon className="search-input-icon" />
          <InputBase placeholder="Search..." className="search-input-text" />
        </div>

        <div className="home-column">
          {items &&
            items.map((each, index) => {
              return (
                <div className="card-container" key={index}>
                  <Card info={each} loading={loading} />
                </div>
              );
            })}
        </div>
        <Pagination
          className="pagination-item"
          count={pages}
          color="primary"
          onChange={handleChangePage}
        />
      </div>
    </>
  );
};

export default Home;
