const currentUser = ( state = {}, action ) => {
  switch(action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {
        uid: action.uid,
        username: action.username,
        email: action.email
      });
      case "GET_USERS_FROM_DATABASE":
       let completeUser = action.usersWithKeys.filter(function(user) { return user.uid === state.uid })
       return completeUser[0];
    case "USER_LOGGED_IN":
      return state;
    case "ANONYMOUS":
      return state;
    case "USER_LOGGED_OUT":
      return {};
    default:
      return state;
  }
};


export default currentUser;

export const getIsUserSignedIn = (state) => Boolean(state.email);
