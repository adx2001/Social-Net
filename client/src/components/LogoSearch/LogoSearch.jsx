import React from "react";
import { FcSearch } from "react-icons/fc";
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="d-flex">

      <div className="d-flex mt-2 ms-4" style={{height:'30px'}}>
        <input
          type="search"
          className="form-control border-0 rounded-1"
          placeholder="Search"
          
        ></input>
          <FcSearch style={{fontSize:'30px'}} />
      
      </div>
    </div>
  );
};

export default LogoSearch;
