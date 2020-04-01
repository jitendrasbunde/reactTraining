
const actions = {
  setDetails: "SET_USER_DETAILS"
};

export const setDetails = param => {
  return {
    type: actions.setUserDetails,
    payload: param
  };
};
export const loginReducer = function (state, action) {
  switch (action.type) {
    case actions.setDetails:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}
