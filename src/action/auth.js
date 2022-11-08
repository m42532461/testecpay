import {
  AUTH,
  END_LOADING,
  START_LOADING,
  ERROR,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signIn(formData);
    if (data?.result && data?.token) {
      dispatch({ type: AUTH, data });
      router("/");
    }

    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: ERROR });
    dispatch({ type: END_LOADING });
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signUp(formData);
    if (data?.result && data?.token) {
      dispatch({ type: AUTH, data });
      router("/");
    }
    dispatch({ type: END_LOADING });
    // router.push("/");
  } catch (error) {
    dispatch({ type: ERROR });
    dispatch({ type: END_LOADING });
    console.log(error);
  }
};
