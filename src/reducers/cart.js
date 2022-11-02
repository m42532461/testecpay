import {
  //   FETCH_ALL,
  //   FETCH_BY_SEARCH,
  //   FETCH_BY_CREATOR,
  //   FETCH_POST,
  //   CREATE,
  //   UPDATE,
  //   DELETE,
  //   LIKE,
  //   COMMENT,
  START_LOADING,
  END_LOADING,
  SET_ORDERCODE,
  ADD_TO_CART,
  IMPORT_CART_FROM_DB,
  CLEAR_CART,
  DELETE_FROM_CART,
} from "../constants/actionTypes";

export default (
  state = {
    isLoading: false,
    items: [],
    orderCode: null,
    quantity: 0,
    total: 0,
  },
  action
) => {
  let index;
  let temp;
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case SET_ORDERCODE:
      return { ...state, orderCode: action.payload };
    case CLEAR_CART:
      return {
        isLoading: false,
        items: [],
        orderCode: null,
        quantity: 0,
        total: 0,
      };

    case ADD_TO_CART:
      state.items.forEach((element, ind) => {
        if (element.id === action.payload.id) {
          index = ind;
        }
      });
      console.log(action.payload);
      temp = state;
      if (index >= 0) {
        temp.items[index].quantity += 1;
      } else {
        temp.quantity += 1;
        temp.items.push(action.payload);
      }
      action.payload.discountPrice
        ? (temp.total += action.payload.discountPrice * action.payload.quantity)
        : (temp.total += action.payload.price * action.payload.quantity);
      console.log(temp);
      return temp;
    case IMPORT_CART_FROM_DB:
      return { ...action.payload };
    case DELETE_FROM_CART:
      temp = state;
      state.items.forEach((element, ind) => {
        if (element.id === action.payload.id) {
          index = ind;
        }
      });
      if (index >= 0) {
        if (temp.items[index].quantity < action.payload.quantity) return temp;
        if (temp.items[index].quantity > action.payload.quantity) {
          temp.items[index].quantity -= action.payload.quantity;
        } else {
          temp.items.splice(index, 1);
          temp.quantity -= 1;
        }
        action.payload.discountPrice
          ? (temp.total -=
              action.payload.discountPrice * action.payload.quantity)
          : (temp.total -= action.payload.price * action.payload.quantity);
      }
      return temp;
    default:
      return state;
  }
};
