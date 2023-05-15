import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const initialState = {
  categories: [],
  selectedCategory: "",
  products: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INITIALISE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ACTION_TYPES.INITIALISE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      
    default:
      return state;
  }
};
