import {actions} from '../actions';
const { FETCH_TOP_STORIES } = actions;

const initialState = {
  top_stories: [],
};

export function topStories(state = initialState, action) {
  switch (action.type) {
    
    case FETCH_TOP_STORIES: {
      console.log('fetch top stories in reducer')
      return {
        ...state,
        top_stories: action.payload.top_stories,
      }
    }

    default:
      return {
        ...state
      };
  }
}
