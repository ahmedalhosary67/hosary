import React from "react";

import "./main.css";

const ProductInfo = ({ item, editFunc }) => {
  
  return (
    <>
      <span className="task-box dropright">
        <span
          className="dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {item.name} _ {item.price} _ {item.quantities}
        </span>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span
            className="button text-danger delete fa fa-trash-o mr-2 ml-2"
            // onclick="deleteFunc(this)"
            id="deleteItem"
          ></span>
          <span
            className="button text-dark edit fa fa-pencil-square-o mr-2"
            onClick={(e)=>editFunc(
              e,
              item.name,
              item.price,
              item.quantities,
              item.type
            )}
          ></span>
        </div>
        <br />
      </span>
    </>
  );
};

export default ProductInfo;
