import {actions} from '../actions';
const { FETCH_MOST_POPULAR } = actions;

const initialState = {
  most_popular: []
};

export function mostPopular(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOST_POPULAR: {
      return {
        ...state,
        most_popular: action.payload.most_popular,
      }
    }

    default:
      return {
        ...state
      };
  }
}
