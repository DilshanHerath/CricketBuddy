const INITIAL_STATE = {
    currentScreen: 'Home',
    changeIcon: 'HomeMusic',
    changeType: 'HOME',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
