import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const signUpUser = async (authDispatch, dataDispatch, user, toast) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("api/auth/signup", user);
    if (status === 201) {
      authDispatch({ type: ACTION_TYPES.SET_JWT_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_USER, payload: createdUser });

      dataDispatch({type:ACTION_TYPES.INITIALISE_CART, payload: createdUser.cart})
      dataDispatch({type:ACTION_TYPES.INITIALISE_WISHLIST, payload: createdUser.wishlist})
      dataDispatch({type:ACTION_TYPES.INITIALISE_ADDRESS, payload: createdUser.address})
      toast.success("Signed up Successfully !");

    }
  } catch (error) {
    console.log(error);
    toast.error("Error in sign up !");
  }
};


export const loginUser= async (authDispatch, dataDispatch, user, toast) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("api/auth/login", user);
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_JWT_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_USER, payload: foundUser });

      dataDispatch({type:ACTION_TYPES.INITIALISE_CART, payload: foundUser.cart})
      dataDispatch({type:ACTION_TYPES.INITIALISE_WISHLIST, payload: foundUser.wishlist})
      dataDispatch({type:ACTION_TYPES.INITIALISE_ADDRESS, payload: foundUser.address})
      toast.success("Logged in !");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error logging in");
  }
};
