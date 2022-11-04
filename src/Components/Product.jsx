import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ value }) => {
  const accessId = useParams();
  // console.log("hi",accessId.id);
  return (
    <div>
      <h1>{accessId.id}</h1>
      {/* we can access content of after / by using this. */}
      
      {<h1>{value}</h1>}
    </div>
  );
};

export default Product;
