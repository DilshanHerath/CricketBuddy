const INITIAL_STATE = {
  username: '',
  password: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '' + '' + '':
      console.log(action.payload);
      return { ...state, username: action.payload };
    case 'GET_ALL_SUBCATEGORY':
      return { ...state, password: action.payload };
    case 'CHANGE_COMPONENT':
      return { ...state, currentScreen: action.payload };
    case 'CHANGE_ICON_COMPONENT':
      return { ...state, changeIcon: action.payload };
    case 'CHANGE_TYPE':
      return { ...state, changeType: action.payload };
    default:
      return state;
  }
};
