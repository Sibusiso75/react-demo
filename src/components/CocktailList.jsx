import React from "react";
import { Link } from "react-router-dom";
import "./cocktail.css";

function CocktailList({ id, name, image }) {
  return (
    <div className="itemsContainer">
      <div>
      <div className="glassAndInfo">
          <p>{name}</p>
          
        </div>
        <Link to={`/meal/${id}`}>

          <img
            src={image}
            alt={name}
           className="photo"
          ></img>
        </Link>
        
      </div>
    </div>
  );
}

export default CocktailList;
