import React from "react";
import { IoStar } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./style.css";
import {
  addToDoBasket,
  addToDoFavorite,
  addToDoFavoriteDelete,
} from "../../../redux/toDoSlice";
import { useNavigate } from "react-router";

function ProductCards({ el }) {
  const { favorite } = useSelector((s) => s.fav);
  const { basket } = useSelector((s) => s.bas);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const someFav = favorite.some((item) => item.id === el.id);
  const addFavorite = () => {
    if (someFav) {
      dispatch(addToDoFavoriteDelete(el.id));
    } else {
      dispatch(addToDoFavorite(el));
    }
  };
  const someBas = basket.some((item) => item.id === el.id);
  const addBasket = () => {
    if (someBas) {
      nav("/basket");
    } else {
      dispatch(addToDoBasket(el));
    }
  };

  const num = new Date();
  const rudate = new Intl.DateTimeFormat("ru");
  const data = rudate.format(num);

  return (
    <div>
      <div className="productCards">
        <a className="favorite_productCards" onClick={() => addFavorite()}>
          {someFav ? (
            <a className="favorite_productCards_white">
              <MdOutlineFavorite />
            </a>
          ) : (
            <MdOutlineFavoriteBorder />
          )}
        </a>
        <Zoom>
          <img src={el.url} alt="" />
        </Zoom>
        <h2>{el.price} ₽</h2>
        <h1 onClick={() => nav(`/detailCards/${el.id}`)}>
          {el.name.slice(0, 24)}
        </h1>
        <h1>
          Category: <span className="categorySpan">{el.category}</span>
        </h1>
        <div className="rating_productCards">
          <a className="">
            <IoStar />
          </a>
          <h3>
            {el.rating}.{el.ratingTwoe}...
          </h3>
          <h4>{el.count} оценок</h4>
        </div>

        {someBas ? (
          <div className="basket_productCards_add" onClick={() => addBasket()}>
            <h4>в корзине</h4>
          </div>
        ) : (
          <div className="basket_productCards" onClick={() => addBasket()}>
            <a className="">
              <FaCartShopping />
            </a>
            <h4>{data}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCards;
