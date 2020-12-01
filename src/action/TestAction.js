export const TestAction = (email) => {
  return {
    type: 'GET_ALL_CATEGORY',
    payload: email,
  };
};
