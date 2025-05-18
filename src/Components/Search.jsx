import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
const Search = () => {
  return (
    <div className="search">
      <IconButton>
        <SearchIcon />
      </IconButton>
      <input placeholder="search" className="input" />
    </div>
  );
};

export default Search;
