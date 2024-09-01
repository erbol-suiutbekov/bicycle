import React from "react";
import "./style.css";
import CatalogProduct from "../Catalog/CatalogProduct";
import CategoryProduct from "./CategoryProduct";
import UiComponent from "./UiComponent";
function Category() {
  return (
    <div>
      <div className="container">
        <div className="category">
          <h1>Category</h1>
          <div className="category_end">
            <UiComponent title={"Романтика"} />
            <UiComponent title={"Драма"} />
            <UiComponent title={"Сказки"} />
            <UiComponent title={"Детектив"} />
            <UiComponent title={"Фантастика"} />
            <UiComponent title={"Приключения"} />
            <UiComponent title={"Научная"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
