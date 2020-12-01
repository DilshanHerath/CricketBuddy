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
    default:
      return state;
  }
};
