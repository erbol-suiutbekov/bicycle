import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./style.css";
function CatalogProduct({title}) {
  const { catalog } = useParams();
  const { product } = useSelector((s) => s.todo);
  const item = product.filter((el) => el.catalog === catalog);
  const nav = useNavigate()
  console.log(title,'yggty');
  
  return (
    <div className="">
      <div className="container">
        <div className="catalogProduct">
          {item.map((el) => (
            <h1 onClick={() => nav(`/categoryProduct`) }>{el.category}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogProduct;
