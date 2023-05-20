import axios from "axios";

import { ACTION_TYPES } from "../../utils/actionTypeConstants";

const fetchCategories = async (dispatch) => {
  try {
    const {
      data: { categories },
      status,
    } = await axios.get("/api/categories");
    if (status === 200) {
      dispatch({
        type: ACTION_TYPES.INITIALISE_CATEGORIES,
        payload: categories,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchProducts = async (dispatch) => {
  try {
    const {
      data: { products },
      status,
    } = await axios.get("/api/products");
    if (status === 200) {
      dispatch({
        type: ACTION_TYPES.INITIALISE_PRODUCTS,
        payload: products,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export { fetchCategories, fetchProducts };
