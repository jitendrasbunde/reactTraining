const loginActions = {
  setUserDetails: "SET_DETAILS"
};

export const setDetails = param => {
  return {
    type: loginActions.setUserDetails,
    payload: param
  };
};

export default loginActions;