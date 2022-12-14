import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null, isLoading: false }, action) => {
  switch (action.type) {
    case actionType.START_LOADING:
      console.log("START_LOADING");
      // return { ...state, isLoading: true };
      return { ...state, isLoading: true, isError: false };
    case actionType.END_LOADING:
      console.log("END_LOADING");
      return { ...state, isLoading: false };
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    case actionType.ERROR:
      console.log("ERROR");
      return { ...state, isError: true };
    case actionType.CLEAR_ERROR:
      return { ...state, isError: false };

    default:
      return state;
  }
};

export default authReducer;
