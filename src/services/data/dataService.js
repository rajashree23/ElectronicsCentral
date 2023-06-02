import axios from "axios";

import { ACTION_TYPES } from "../../utils/actionTypeConstants";

const fetchCategories = async (dataDispatch) => {
  try {
    const {
      data: { categories },
      status,
    } = await axios.get("/api/categories");
    if (status === 200) {
      dataDispatch({
        type: ACTION_TYPES.INITIALISE_CATEGORIES,
        payload: categories,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchProducts = async (dataDispatch) => {
  try {
    const {
      data: { products },
      status,
    } = await axios.get("/api/products");
    if (status === 200) {
      dataDispatch({
        type: ACTION_TYPES.INITIALISE_PRODUCTS,
        payload: products,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const addAddress = async (dataDispatch, addressForm, token, toast) => {
  try {
    const {
      status,
      data: { address },
    } = await axios.post(
      "/api/user/address",
      { address: addressForm },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.ADD_ADDRESS, payload: address });
      toast.success("Address added successfully !");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error in removing address !");
  }
};

const removeAddress = async (dataDispatch, addressId, token, toast) => {
  try {
    const {
      status,
      data: { address },
    } = await axios.delete(`api/user/address/${addressId}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200) {
      dataDispatch({ type: ACTION_TYPES.REMOVE_ADDRESS, payload: address });
      toast.success("Address removed successfully !");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error in removing address !");
  }
};
const updateAddress = async (dataDispatch, addressForm, token, toast) => {
  try {
    const {
      status,
      data: { address },
    } = await axios.post(
      `api/user/address/${addressForm._id}`,
      { address: addressForm },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      dataDispatch({ type: ACTION_TYPES.UPDATE_ADDRESS, payload: address });
      toast.success("Address updated successfully !");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error in updating address !");
  }
};
export {
  fetchCategories,
  fetchProducts,
  addAddress,
  removeAddress,
  updateAddress,
};
