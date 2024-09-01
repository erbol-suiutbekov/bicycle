import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addToDoBasketDelete,
  addToDoBasketQentity,
  addToDoBasketQentityDec,
  addToDoFavorite,
  addToDoFavoriteDelete,
} from "../../../redux/toDoSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite } from "react-icons/md";

import "./style.css";

function BasketCards({ el }) {
  const dispatch = useDispatch();
  const { favorite } = useSelector((s) => s.fav);
  const someFav = favorite.some((item) => item.id === el.id);
  const addFavorite = () => {
    if (someFav) {
      dispatch(addToDoFavoriteDelete(el.id));
    } else {
      dispatch(addToDoFavorite(el));
    }
  };

  return (
    <>
      <div className="basketall">
        <img src={el.url} alt="" />
        <div className="basH1">
          <h1>{el.name}</h1>
          <h2>{el.category}</h2>
          <h2>
            украшение от <span>LUX</span>
          </h2>
        </div>
        <div className="bascount">
          <button onClick={() => dispatch(addToDoBasketQentityDec(el.id))}>
            -
          </button>
          <h1>{el.quentity}</h1>
          <button onClick={() => dispatch(addToDoBasketQentity(el.id))}>
            +
          </button>
        </div>
        <div className="basprice">
          <h1>{el.price * el.quentity}сом</h1>
          <div className="favebas">
            <a className="" onClick={() =>addFavorite()}>
            {someFav ? (
              <a className="text-red-600">
                <MdOutlineFavorite />
              </a>
            ) : (
              <a className="">
                <MdOutlineFavoriteBorder />
              </a>
            )}
            </a>

            <a
              className=""
              onClick={() => dispatch(addToDoBasketDelete(el.id))}
            >
              <RiDeleteBin6Line />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketCards;
