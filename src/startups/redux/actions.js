import startupsJSON from 'data.json'

function fakeGetStartups() {
  return new Promise(resolve => {
    setTimeout(() => resolve(startupsJSON), 1000);
  });
}

export function fetchStartups() {
  return dispatch => {
    dispatch(fetchStartupsBegin());

    return fakeGetStartups()
      .then(json => {
        dispatch(fetchStartupsSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchStartupsFailure(error))
      );
  };
}

export const FETCH_STARTUPS_BEGIN = 'FETCH_STARTUPS_BEGIN';
export const FETCH_STARTUPS_SUCCESS = 'FETCH_STARTUPS_SUCCESS';
export const FETCH_STARTUPS_FAILURE = 'FETCH_STARTUPS_FAILURE';

export const fetchStartupsBegin = () => ({
  type: FETCH_STARTUPS_BEGIN
});

export const fetchStartupsSuccess = startups => ({
  type: FETCH_STARTUPS_SUCCESS,
  payload: { startups }
});

export const fetchStartupsFailure = error => ({
  type: FETCH_STARTUPS_FAILURE,
  payload: { error }
});
