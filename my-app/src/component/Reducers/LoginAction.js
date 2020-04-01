const loginActions = {
  setUserDetails: "SET_USER_DETAILS"
};

export const setUserDetails = param => {
  return {
    type: loginActions.setUserDetails,
    payload: param
  };
};

export default loginActions;