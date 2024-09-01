import React from "react";
import { useNavigate } from "react-router";
import "./style.css";
function CatalogComponent({ catalog }) {
  console.log(catalog);
  const nav = useNavigate();
  return (
    <div className="catalog_component">
      <h1 onClick={() => nav(`/catalogProduct/${catalog}`)}>{catalog}</h1>
    </div>
  );
}
export default CatalogComponent;
