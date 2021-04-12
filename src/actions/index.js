export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginUser: 'LOGIN_USER',
  logoutUser: 'LOGOUT_USER',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginUser = (payload) => ({
  type: actions.loginUser,
  payload,
});

export const logoutUser = (payload) => ({
  type: actions.logoutUser,
  payload,
});
