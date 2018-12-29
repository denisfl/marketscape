import {
  FETCH_COMPANIES_BEGIN,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE
} from '../actions';

const initialState = {
  items: [],
  loading: true,
  error: null
}

export default function companiesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMPANIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.companies
      };
    case FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
