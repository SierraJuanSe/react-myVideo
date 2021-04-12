
import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (!state.mylist.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          mylist: [...state.mylist, action.payload],
        };
      }
      return state;
    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case actions.loginUser:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutUser:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;

