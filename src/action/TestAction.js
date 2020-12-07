export const changeComponent = (name) => {
  return {
    type: 'CHANGE_COMPONENT',
    payload: name,
  };
};

export const changeIconComponent = (name) => {
  return {
    type: 'CHANGE_ICON_COMPONENT',
    payload: name,
  };
};
