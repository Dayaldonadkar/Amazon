import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <div className="flex bg-[#131921] items-center text-white justify-around py-3">
      <div>
        <img className="" src="./Amazon.in.png" />
      </div>

      <div className="flex items-center text-white">
        <div>
          <LocationOnIcon />
        </div>
        <div>
          <p className="text-xs">Hello</p>
          <h1 className="text-sm font-bold">Select Your Address</h1>
        </div>
      </div>

      <div className="flex items-center">
        <label for="categories"></label>
        <select
          className="h-9 rounded-l-md bg-gray-300"
          name="Categories"
          id="cars"
        >
          <option value="All">All</option>
          <option value="Baby">Baby</option>
          <option value="Home">Home</option>
          <option value="Electroncis">Electronics</option>
        </select>

        <input className="h-9 w-[700px]" placeholder="Search Amazon.in" />
        <div className="bg-yellow-200 h-9 flex items-center rounded-r-md px-2">
          <SearchIcon fontSize="medium" />
        </div>
      </div>

      <div className="flex">
        <img src="span.png" />
        <p>En</p>
      </div>

      <div>
        <p className="text-xs">Hello,sign in</p>
        <p className="text-sm font-bold">Accounts & Lists</p>
      </div>

      <div>
        <p className="text-xs">Rerturns</p>
        <p className="text-sm font-bold">&Orders</p>
      </div>

      <div className="flex items-end">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
