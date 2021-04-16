
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
        user: action.payload,
      };
    case actions.registerUser:
      return {
        ...state,
        user: action.payload,
      };
    case actions.setPlaying:
      return {
        ...state,
        playing: state.trends.find((i) => i.id === Number(action.payload)) ||
        state.originals.find((i) => i.id === Number(action.payload)) ||
        [],
      };
    default:
      return state;
  }
};

export default reducer;

