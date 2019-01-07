import {
  FETCH_STARTUPS_BEGIN,
  FETCH_STARTUPS_SUCCESS,
  FETCH_STARTUPS_FAILURE
} from 'startups/redux/actions';

const initialState = {
  items: [],
  loading: true,
  error: null
}

export default function startupsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STARTUPS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_STARTUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.startups
      };
    case FETCH_STARTUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
