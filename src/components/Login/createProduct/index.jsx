import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../../redux/toDoSlice";
import "./style.css";
function CreateProduct() {
  const [ProductName, setProductName] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDes, setProductDes] = useState("");
  const [ProductUrl, setProductUrl] = useState("");
  const [ProductCatalog, setProductCatalog] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.todo);
  const ratinge = 5;
  const ratingWane = Math.floor(Math.random(ratinge) * 5);
  const random = 9;
  const randomWane = Math.floor(Math.random(random) * 9);
  const count = 1000;
  const countWane = Math.floor(Math.random(count) * 1000);

  const ProductCard = () => {
    if (
      ProductName.trim() === "" ||
      ProductPrice.trim() === "" ||
      ProductDes.trim() === "" ||
      ProductUrl.trim() === ""
    ) {
      alert(404);
    } else {
      const newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        name: ProductName,
        price: ProductPrice,
        category: ProductCategory,
        description: ProductDes,
        url: ProductUrl,
        catalog: ProductCatalog,
        rating: ratingWane,
        ratingTwoe: randomWane,
        count: countWane,
        quentity: 1,
      };
      dispatch(addToDo(newProduct));
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      setProductCategory("");
      setProductDes("");
      setProductCatalog("");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="createProduct">
          <div className="input_add">
            <input
              type="text"
              placeholder="Product Url"
              className="inputCreateProduct"
              onChange={(e) => setProductUrl(e.target.value)}
              value={ProductUrl}
            />
            <div className="name_price">
              <input
                type="text"
                placeholder="Product Name"
                className="inputCreateProduct"
                onChange={(e) => setProductName(e.target.value)}
                value={ProductName}
              />
              <input
                type="text"
                placeholder="Product Price"
                className="inputCreateProduct"
                onChange={(e) => setProductPrice(e.target.value)}
                value={ProductPrice}
              />
            </div>
            <input
              type="text"
              placeholder="Product Description"
              className="inputCreateProduct"
              onChange={(e) => setProductDes(e.target.value)}
              value={ProductDes}
            />

            <select
              className="text-[20px] w-[459px] py-[5px] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
              onChange={(e) => setProductCategory(e.target.value)}
              value={ProductCategory}
            >
              <option value="">Categories...</option>
              <option value="кольцы">Rings</option>
              <option value="цепочки">Chains</option>
              <option value="серьги">Earrings</option>
              <option value="браслеты">Bracelets</option>
              <option value="книги">books</option>
              <option value="мужской">мужской</option>
              <option value="женский">женский</option>
              <option value="детский">детский</option>
              <option value="спортивный">спортивный</option>
              <option value="классический">классический</option>
              
            </select>
            <select
              className="text-[20px] w-[459px] py-[5px] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
              onChange={(e) => setProductCatalog(e.target.value)}
              value={ProductCatalog}
            >
              <option value="">Catalog...</option>
              <option value="украшение">украшение</option>
              <option value="одежда">одежда</option>
              <option value="обувь">обувь</option>
              <option value="дом и сад">дом и сад</option>
              <option value="детские товары">детские товары</option>
              <option value="красота и здоровье">красота и здоровье</option>
              <option value="бытовая техника">бытовая техника</option>
              <option value="спорт и отдых">спорт и отдых</option>
              <option value="строительство и ремонт">
                строительство и ремонт
              </option>
              <option value="продукты питания">продукты питания</option>
              <option value="аптека">аптека</option>
              <option value="книги">книги</option>
              <option value="мебель">мебель</option>
              <option value="аксессуары">аксессуары</option>
            </select>
            <div className="btn">
              <button onClick={() => ProductCard()}>add pro</button>
            </div>
          </div>
          <div className="create_product_books">
          <select
              className="text-[20px] w-[459px] py-[5px] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
              onChange={(e) => setProductCategory(e.target.value)}
              value={ProductCategory}
            >
              <option value="">Categories Books...</option>
              <option value="Романтика">Романтика</option>
              <option value="Драма">Драма</option>
              <option value="Сказки">Сказки</option>
              <option value="Детектив">Детектив</option>
              <option value="Фантастика">Фантастика</option>
              <option value="Приключения">Приключения</option>
              <option value="Научная">Научная</option>
            </select>
            <select
              className="text-[20px] w-[459px] py-[5px] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
              onChange={(e) => setProductCategory(e.target.value)}
              value={ProductCategory}
            >
              <option value="">Categories Cloth...</option>
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
              <option value="Детский">Детский</option>
              <option value="Спортивный">Спортивный</option>
              <option value="Классический">Классический</option>
              <option value="Зимный">Приключения</option>
              <option value="Осенный">Научная</option>
              <option value="Летний">Научная</option>
              <option value="Весна">Научная</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
