import React from "react";
import Display from "./Display";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";
const Header=({display})=> {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [filteredData, setFilteredData]=React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(display);
        const filtered=display.filter((item)=>item.title.toLowerCase()===searchQuery.toLowerCase());
        console.log(filtered);
          setFilteredData(filtered.length>0? filtered:[]);
        console.log("Search query:", {searchQuery});
        console.log("Filtered data:", {filteredData});
    };


    function handleChange(e){    
        setSearchQuery(e.target.value);
       //  console.log(searchQuery);
 }

    const NavBar=()=>(
        <div style={{color:"black",padding:"5px", display:"flex", marginBottom:"40px"}} className="navbar">
            <img src={logo} style={{width:'70px', height:"auto"}} alt="Logo" />
        </div>
    );

    return (
        <div sx={{display:"flex",}}>
            <NavBar/>
            <SearchBar 
            setSearchQuery={setSearchQuery} 
            searchQuery={searchQuery} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            sx={{Margin:"0px"}}/>
            <Display display={filteredData} />
        </div>
        
    );
}

export default Header;
