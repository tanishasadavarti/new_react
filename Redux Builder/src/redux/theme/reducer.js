import { THEME } from "../Actiontype";

const initialState = {
  theme: 'light', 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME:
      return { ...state,  theme: action.payload };
    default:
      return state;
  }
};


