import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = ({searchQuery, handleChange, handleSubmit}) => {

  return (
    <div>
 <form onSubmit={handleSubmit} style={{marginLeft:"0px"}} >
            <TextField 
               type="text"
                id="search-bar"
                value={searchQuery}
                onChange={handleChange}
                label="Search"
                variant="outlined"
                sx={{width:"300px"}}
                size="medium"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "#DAA520",  }} />
            </IconButton>
        </form>

    </div>
  )
}

export default SearchBar;