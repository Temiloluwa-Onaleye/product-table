import React from "react";

const Searchbar = ({ filterText, inStockOnly }) => {
  return (
    <form>
      <input type="text" placeholder="search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  );
};

export default Searchbar;
