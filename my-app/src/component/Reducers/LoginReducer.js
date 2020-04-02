 
import loginActions from './LoginAction';

function reducer(state, action) {
  switch (action.type) {
    case loginActions.setUserDetails:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export default reducer;