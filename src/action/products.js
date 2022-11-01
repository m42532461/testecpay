import {
  AUTH,
  START_LOADING,
  END_LOADING,
  GET_ALL_PRODUCTS,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchAllProducts();

    dispatch({ type: GET_ALL_PRODUCTS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
