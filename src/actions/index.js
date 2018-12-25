import companiesJSON from '../data.json'

function fakeGetCompanies() {
  return new Promise(resolve => {
    setTimeout(() => resolve(companiesJSON), 1000);
  });
}

export function fetchCompanies() {
  return dispatch => {
    dispatch(fetchCompaniesBegin());

    return fakeGetCompanies()
      .then(json => {
        dispatch(fetchCompaniesSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchCompaniesFailure(error))
      );
  };
}

export const FETCH_COMPANIES_BEGIN = 'FETCH_COMPANIES_BEGIN';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const fetchCompaniesBegin = () => ({
  type: FETCH_COMPANIES_BEGIN
});

export const fetchCompaniesSuccess = companies => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: { companies }
});

export const fetchCompaniesFailure = error => ({
  type: FETCH_COMPANIES_FAILURE,
  payload: { error }
});
