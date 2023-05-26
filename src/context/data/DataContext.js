import { createContext, useContext, useEffect, useReducer } from "react";

import { dataReducer, initialState } from "../../reducer/data/DataReducer";

import {
  fetchCategories,
  fetchProducts,
} from "../../services/data/dataService";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    fetchCategories(dispatch);
    fetchProducts(dispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{
        categories: state.categories,
        products: state.products,
        dataDispatch: dispatch,
        filters: state.filters,
        cart: state.cart,
        wishlist: state.wishlist,
        address: state.address,
        deliveryAddress:state.deliveryAddress
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
