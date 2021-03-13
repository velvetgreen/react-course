import { API_URL } from "../../utils/constans";

export const GET_DATA = "DATA::GET_DATA";
export const GET_DATA_REQUEST = "DATA::GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "DATA::GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "DATA::GET_DATA_FAILURE";

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
});

export const getDataFailure = (err) => ({
  type: GET_DATA_FAILURE,
  err,
});

export const getData = () => async (dispatch) => {
  dispatch(getDataRequest());

  try {
    const res = await fetch(API_URL);

    const response = await res.json();

    dispatch(getDataSuccess(response));
  } catch (err) {
    dispatch(getDataFailure(err.message));
}
};