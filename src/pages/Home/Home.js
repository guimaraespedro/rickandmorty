import React, { useEffect, useState } from "react";
import "./Home.scss";
import characterQuery from "../../services/homeService";
import Card from "../../components/Card/Card";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography, InputBase, FormControl, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState();
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(0);
  const [search, setSearch] = useState("");
  const [filterSelect, setFilterSelect] = useState("");
  let { id } = useParams();
  const [page, setPage] = useState(id ? parseInt(id) : 1);
  let history = useHistory();
  const [params, setParams] = useState({
    page
  });

  useEffect(() => {
    setLoading(1);
    characterQuery({
      params
    })
      .then(res => {
        setItems(res.results);
        setPages(res.info.pages);
        setLoading(0);
      })
      .catch(error => {});
    console.log(params);
  }, [page, params]);

  const handleChangePage = (event, page) => {
    history.push(`/home/${page}`);
    setParams({...params,page})
  };

  const handleChangeSelect = e => {
    setFilterSelect(e.target.value);
  };
  const handleChangeSearch = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!filterSelect || !search) {
      console.log('aqui');
      if(params.page){
      setLoading(1);
      characterQuery({
        page:1
      })
        .then(res => {
          setItems(res.results);
          setPages(res.info.pages);
          setLoading(0);
        })
        .catch(error => {});
      } else setParams({page});
    } else {
      setLoading(1);
      setParams({page:1, [filterSelect]:search})
      characterQuery({
        params
      })
        .then(res => {
          setItems(res.results);
          setPages(res.info.pages);
          setLoading(0);
        })
        .catch(error => {});
    }
  };

  return (
    <div className="home-container">
      <Typography className="home-title" variant="h5">
        What do you want to know about them? Here we have all the infos!
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <div className="search-input-container">
            <InputBase
              placeholder="Search..."
              onChange={handleChangeSearch}
              className="search-input-text"
            />
          </div>
          <div className="filter-icon-container">
            <FormControl>
              <InputLabel
                id="characters-filter-label-id"
                className="character-filter-label"
              >
                Filter
              </InputLabel>

              <Select
                labelId="characters-filter-label-id"
                className="select-item"
                value={filterSelect}
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="status">Status</MenuItem>
                <MenuItem value="gender">Gender</MenuItem>
              </Select>
            </FormControl>
            <Button className="search-icon-button" type="submit">
              <SearchIcon className="search-input-icon" />
            </Button>
          </div>
        </div>
      </form>
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
        page={params.page}
        className="pagination-item"
        count={pages}
        color="primary"
        onChange={handleChangePage}
      />
    </div>
  );
};

export default Home;
