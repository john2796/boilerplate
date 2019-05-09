import {
  VARIABLE_TYPE_START,
  VARIABLE_TYPE_SUCCESS,
  VARIABLE_TYPE_ERROR
} from "../types";

const initialState = {
  variable1: [],
  variable2: {},
  variable3: false,
  variable4: "It's working, it's working!!!"
};

export const oneReducer = (state = initialState, action) => {
  switch (action.type) {
    case VARIABLE_TYPE_START:
      return {
        ...state,
        variable1: [],
        variable2: {}
      };
    case VARIABLE_TYPE_SUCCESS:
      return {
        ...state,
        variable3: false
      };
    case VARIABLE_TYPE_ERROR:
      return {
        ...state,
        variable4: "It's working, it's working!!!"
      };
    default:
      return state;
  }
};
