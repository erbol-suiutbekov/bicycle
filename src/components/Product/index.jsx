import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { ImSearch } from "react-icons/im";
import ProductCards from "./ProductCards";
function Product() {
  const { product } = useSelector((s) => s.todo);
  console.log(product,'pp');
  
  const [input, setInput] = useState('')
  const searchProduct = product.filter((el) => {
    return el.name.toLowerCase().includes(input.toLowerCase())
})
  return (
    <div>
      <div className="container">
      <div className="search">
            <input type="text" placeholder="search for a product" onChange={(e) => setInput(e.target.value)} value={input} />
            <a className="">
              <ImSearch />
            </a>
          </div>
        <div className="product">
          
          {searchProduct.map((el) => (
            <ProductCards el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;


