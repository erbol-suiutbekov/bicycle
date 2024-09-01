import React from "react";
import { useSelector } from "react-redux";
import BasketCards from "./BasketCards";
import "./style.css";
function Basket() {
  const { basket } = useSelector((s) => s.bas);
  const bas = basket.reduce((idx, el) => idx + el.quentity, 0);
  const basPrice = basket.reduce((idx, el) => idx + +el.price * el.quentity, 0);

  return (
    <div>
      <div className="container">
        <div className="basket">
          <div className="base">
            <div className="basGlob">
              <h1>Корзина</h1>
              <h2>{bas} товаров</h2>
            </div>
            {basket.map((el) => (
              <BasketCards el={el} />
            ))}
          </div>
          <div className="telebasket">
            <h3>выбрать адрес доставки</h3>
            <div className="telebash1">
              <h1>Товары, {bas} шт.</h1>
              <h1>{basPrice} сом </h1>
            </div>
            <div className="telebash2">
              <h1>Итого</h1>
              <h1>{basPrice} сом </h1>
            </div>
            <div className="telebasbtn">
              <button>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
