import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  cataloge: false,
};

export const toDoSlice = createSlice({
  name: "TO_DO_LIST",
  initialState,
  reducers: {
    addToDo(state, action) {
      const newProduct = (state.product = [...state.product, action.payload]);
      localStorage.setItem("product", JSON.stringify(newProduct));
    },
    addToDoFavorite(state, action) {
      const newProduct = (state.favorite = [...state.favorite, action.payload]);
      localStorage.setItem("favorite", JSON.stringify(newProduct));
    },
    addToDoFavoriteDelete(state, action) {
      const newProduct = (state.favorite = state.favorite.filter(
        (el) => el.id !== action.payload
      ));
      localStorage.setItem("favorite", JSON.stringify(newProduct));
    },
    addToDoBasket(state, action) {
      const newProduct = (state.basket = [...state.basket, action.payload]);
      localStorage.setItem("basket", JSON.stringify(newProduct));
    },
    addToDoBasketQentity(state, action) {
      const newProduct = (state.basket = state.basket.map((item) =>
        item.id === action.payload
          ? { ...item, quentity: item.quentity + 1 }
          : item
      ));
      localStorage.setItem("basket", JSON.stringify(newProduct));
    },
    addToDoBasketQentityDec(state, action) {
      const newProduct = (state.basket = state.basket.map((item) =>
        item.id === action.payload
          ? { ...item, quentity: item.quentity > 1 ? item.quentity - 1 : 1 }
          : item
      ));
      localStorage.setItem("basket", JSON.stringify(newProduct));
    },
    addToDoBasketDelete(state, action) {
      const newProduct = (state.basket = state.basket.filter(
        (el) => el.id !== action.payload
      ));
      localStorage.setItem("basket", JSON.stringify(newProduct));
    },
    addToDofalse(state,action) {
      state.cataloge = action.payload
    },
    
  },
});

export const {
  addToDo,
  addToDoFavorite,
  addToDoFavoriteDelete,
  addToDoBasket,
  addToDoBasketQentity,
  addToDoBasketQentityDec,
  addToDoBasketDelete,
  addToDofalse,
} = toDoSlice.actions;
export default toDoSlice.reducer;
