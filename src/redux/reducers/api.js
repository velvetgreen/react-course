import {
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS,
  } from "redux/actions/api";

  import { STATUSES } from "../../utils/constans";
  
  const initialState = {
    data: [],
    request: STATUSES.IDLE,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA_REQUEST:
        return {
          ...state,
          request: STATUSES.REQUEST,
        };
      case GET_DATA_SUCCESS:
        const {data} = action;
        return {
          ...state,
          data: data,
          request: STATUSES.SUCCESS,
        };
      case GET_DATA_FAILURE:
        const {err} = action;
        return {
          ...state,
          request: STATUSES.FAILURE,
          error: err,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;