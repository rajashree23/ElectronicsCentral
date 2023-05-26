import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const addToCart = async (dataDispatch, product, token) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: cart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (
  dataDispatch,
  productId,
  actionType,
  token
) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionType,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      dataDispatch({ type: ACTION_TYPES.UPDATE_CART, payload: cart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (dataDispatch, productId, token) => {
  try {
    const {
      status,
      data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200) {
      dataDispatch({ type: ACTION_TYPES.REMOVE_ITEM, payload: cart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeAllFromCart = async (dataDispatch, cart, token) => {
  let promiseArr = [];
  try {
    cart.forEach((item) => {
      const deletedItem = axios.delete(`/api/user/cart/${item._id}`, null, {
        headers: {
          authorization: token,
        },
      });
      promiseArr = [...promiseArr, deletedItem];
    });
    Promise.all(promiseArr).then(() =>
      dataDispatch({ type: ACTION_TYPES.CLEAR_CART })
    );
  } catch (error) {
    console.log(error);
  }
};
