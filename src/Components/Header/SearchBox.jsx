import React from "react";
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <>
      {/* header search bar start here  */}
      <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="Search for products" />
        <Button>
          <IoIosSearch />
        </Button>
      </div>
      {/* header search bar end here  */}
    </>
  );
};

export default SearchBox;
