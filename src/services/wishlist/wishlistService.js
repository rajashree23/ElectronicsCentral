import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const addToWishlist = async (dataDispatch, product, token, toast) => {
  try {
    const {
      status,
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.ADD_TO_WISHLIST, payload: wishlist });
      toast.success("Added to Wishlist !");
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (dataDispatch, productId, token, toast) => {
    try {
      const {
        status,
        data: { wishlist },
      } = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      if (status === 200) {
        dataDispatch({ type: ACTION_TYPES.REMOVE_FROM_WISHLIST, payload: wishlist });
        toast.warning("Removed from wishlist !");
      }
    } catch (error) {
      console.log(error);
    }
  };