import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr colSpan="2">
      <th>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
