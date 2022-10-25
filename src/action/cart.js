import { useSelector } from "react-redux";
import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  SET_ORDERCODE,
  ADD_TO_CART,
  IMPORT_CART_FROM_DB,
  CLEAR_CART,
  DELETE_FROM_CART,
} from "../constants/actionTypes";

export const addToCart =
  (title, price, id, quantity = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      dispatch({ type: ADD_TO_CART, payload: { title, price, id, quantity } });
      const { data } = await api.addToCart({ title, price, id, quantity });

      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
export const removeFromCart =
  (title, price, id, quantity = 1) =>
  async (dispatch) => {
    console.log(title);
    console.log(price);
    console.log(id);
    console.log(quantity);
    try {
      dispatch({ type: START_LOADING });

      dispatch({
        type: DELETE_FROM_CART,
        payload: { title, price, id, quantity },
      });
      const { data } = await api.removeFromCart({
        title,
        price,
        id,
        quantity,
      });

      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchCartFromDB = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getCart();
    console.log(data.cart);
    dispatch({ type: IMPORT_CART_FROM_DB, payload: data.cart });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.clearCart();
    console.log(data.cart);
    dispatch({ type: CLEAR_CART });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
