import * as actionTypes from "./Types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};


export const requestLogin = () => {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
};

export const receiveLogin = user => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user
  };
};

export const loginError = () => {
  return {
    type: actionTypes.LOGIN_FAILURE
  };
}

export const LOGOUTREQUEST = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST
  };
}

export const LOGOUTSUCCESS = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

export const LOGOUTFAILURE = () => {
  return {
    type: actionTypes.LOGOUT_FAILURE
  };
}


export const VERIFYSUCCESS = () => {
  return {
    type: actionTypes.VERIFY_SUCCESS
  };
}


export const VERIFYREQUEST = () => {
  return {
    type: actionTypes.VERIFY_REQUEST
  };
}