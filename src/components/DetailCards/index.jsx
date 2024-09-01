import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import "./style.css";
function detailCards() {
  const { ide } = useParams();
  const { product } = useSelector((s) => s.todo);
  const item = product.find((el) => el.id == ide);

  const colorDetail = [
    "синий",
    "красный",
    "белый",
    "розовый",
    "бежевый",
    "черный",
    "пурпурный",
    "серебристый",
    "золотой",
  ];
  // const randomeColor = Math.random(colorDetail)

  return (
    <div>
      <div className="container">
        <div className="details">
          <div className="details_img">
            <img src={item.url} alt="" />
          </div>
          <div className="details_logic">
            <a className="">{item.category}</a>
            <h1>{item.name}</h1>
            <div className="details_logic_rating">
              <div className="details_logic_star">
                <a className="">
                  <IoStar />
                </a>
                <h2>
                  {item.rating}.{item.ratingTwoe}
                </h2>
              </div>
              <h3>{item.count}оценок</h3>
            </div>
            <h2 className="d_c_h2">
              Цвет: <span>white</span>
            </h2>
            <img src={item.url} alt="" />
            <h6>Описание</h6>
            <p>{item.description}</p>
          </div>
          <div className="details_basket">
            <div className="details_basket_price">
              <a className="">
                <BiSolidLike />
              </a>
              <h2>хорошоя цена</h2>
            </div>
            <h1>{item.price} ₽</h1>
            <div className="details_basket_bit"></div>
            <div className="details_basket_create_basket">
              <h3>Добавить в корзину</h3>
            </div>
            <div className="details_basket_category_name">
              <h4>
                category: <span>{item.category}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailCards;
