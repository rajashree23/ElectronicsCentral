import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const initialState = {
  categories: [],
  selectedCategory: "",
  products: [],
  filters: {
    sortBy: "",
    categories: [],
    rating: "",
    priceRange: "50000",
    inputSearch: "",
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
          priceRange: "50000",
          inputSearch: "",
        },
      };
    default:
      return state;
  }
};
