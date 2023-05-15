import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import { dataReducer, initialState } from "../../reducer/data/DataReducer";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchCategories = async () => {
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

  const fetchProducts = async () => {
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

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{ categories: state.categories, products: state.products }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
