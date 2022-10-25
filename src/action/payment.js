import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  SET_ORDERCODE,
} from "../constants/actionTypes";

export const makeOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    // 從後端取回orderCode
    // const { data } = await api.makeOrder(orderData);
    const { data } = await api.makeOrder(orderData);

    // set orderCode in reducer = data
    dispatch({ type: SET_ORDERCODE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrderCode = (id, orderData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { code } = await api.fetchOrderCode(id, orderData);

    dispatch({ type: SET_ORDERCODE, payload: code });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
