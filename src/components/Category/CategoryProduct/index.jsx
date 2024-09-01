import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCards from "../../Product/ProductCards";
import "./style.css";
function CategoryProduct({ title }) {
  const { product } = useSelector((s) => s.todo);
  const categoryProductFilter = product.filter((el) => el.category == "кольцы");
  console.log(title);

  return (
    <div>
      <div className="container">
        <div className="categoryProduct">
          {categoryProductFilter.map((el) => (
            <ProductCards el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
