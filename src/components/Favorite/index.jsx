import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "../Product/ProductCards";
import "./style.css";
function Favorite() {
  const { favorite } = useSelector((s) => s.fav);
  return (
    <div>
      <div className="container">
        <div className="favorite">
          <h1 className="h1_favorite">ИЗБРАННЫЕ</h1>
          <div className="favorite_leal">
            {favorite.map((el) => (
              <ProductCards el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
