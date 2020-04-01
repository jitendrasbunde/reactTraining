 
import loginActions from './LoginAction';

function loginReducer(state, action) {
  switch (action.type) {
    case loginActions.setUserDetails:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export default loginReducer;