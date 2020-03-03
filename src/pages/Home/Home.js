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
  //const [search,setSearch] = useState('');
  const [filterSelect, setFilterSelect] = useState("");
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

  const handleChangeSelect = event => {
    setFilterSelect(event.target.value);
  };

  return (
    <div className="home-container">
      <Typography className="home-title" variant="h5">
        What do you want to know about them? Here we have all the infos!
      </Typography>
      <div className="search-container">
        <div className="search-input-container">
          <InputBase placeholder="Search..." className="search-input-text" />
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
            <MenuItem value="origin">Origin</MenuItem>
            <MenuItem value="location">Last location</MenuItem>
          </Select>
        </FormControl>
        <Button className="search-icon-button">
        <SearchIcon className="search-input-icon" onClick={()=> alert('teste')}/>
        </Button>
        </div>
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
  );
};

export default Home;
