import {
  GET_ALL_PRODUCTS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (
  state = {
    isLoading: false,
    products: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
