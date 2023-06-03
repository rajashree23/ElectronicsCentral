import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const initialState = {
  categories: [],
  products: [],
  loader: true,
  filters: {
    sortBy: "",
    categories: [],
    rating: "",
    priceRange: "100000",
    inputSearch: "",
  },
  cart: JSON.parse(localStorage.getItem("user"))?.cart ?? [],
  wishlist: JSON.parse(localStorage.getItem("user"))?.wishlist ?? [],
  address: JSON.parse(localStorage.getItem("user"))?.address ?? [],
  deliveryAddress: null,
  orderSummary: {
    price: {},
    items: [],
    address: {},
  },
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
        loader: false,
      };

    case ACTION_TYPES.CATEGORY:
      const categoryValue = action.payload.target?.value ?? action.payload;
      const isCategoryChecked = action.payload.target?.checked ?? true;

      if (isCategoryChecked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories, categoryValue],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (filter) => filter !== categoryValue
            ),
          },
        };
      }
    case ACTION_TYPES.PRICE_RANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.payload,
        },
      };

    case ACTION_TYPES.RATINGS:
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: action.payload,
        },
      };
    case ACTION_TYPES.SORTBY:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };

    case ACTION_TYPES.INPUT_SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          inputSearch: action.payload,
        },
      };

    case ACTION_TYPES.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          sortBy: "",
          categories: [],
          rating: "",
          priceRange: "100000",
          inputSearch: "",
        },
      };

    case ACTION_TYPES.INITIALISE_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case ACTION_TYPES.INITIALISE_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPES.UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case ACTION_TYPES.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ACTION_TYPES.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ACTION_TYPES.INITIALISE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ACTION_TYPES.LOG_OUT:
      return {
        ...state,
        address: [],
        cart: [],
        wishlist: [],
      };

    case ACTION_TYPES.ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case ACTION_TYPES.REMOVE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ACTION_TYPES.SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case ACTION_TYPES.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ACTION_TYPES.SET_ORDER_SUMMARY_PRICE:
      return {
        ...state,
        orderSummary: {
          ...state.orderSummary,
          price: action.payload,
        },
      };
    case ACTION_TYPES.SET_ORDER_SUMMARY_ITEMS:
      return {
        ...state,
        orderSummary: {
          ...state.orderSummary,
          items: action.payload,
        },
      };
    case ACTION_TYPES.SET_ORDER_SUMMARY_ADDRESS:
      return {
        ...state,
        orderSummary: {
          ...state.orderSummary,
          address: action.payload,
        },
      };
    default:
      return state;
  }
};
