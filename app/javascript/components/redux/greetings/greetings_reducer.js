// Action Types
const FETCH_GREETINGS = 'ror-w-react-app/greetings/FETCH_GREETINGS';
const FETCH_LOADING = 'ror-w-react-app/greetings/FETCH_LOADING';
const FETCH_ERROR = 'ror-w-react-app/greetings/FETCH_ERROR';

// URL from which we are manipulating the API data (this is greetings/index route)
const URL = '/greetings.json';

// Initial (default) state
const initialState = {
  greetings: [],
  loading: false,
  error: null,
};

// Redux Actions
export const fetchGreetings = (greetings) => ({
  type: FETCH_GREETINGS,
  payload: greetings,
});

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

// Redux Thunk functions (reducers)

export const getGreetings = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      dispatch(fetchGreetings(response.data));
    })
    .catch((error) => {
      dispatch(fetchError(error.message));
    });
};

// Reducer functions
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GREETINGS:
      return {
        ...state,
        loading: false,
        greetings: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default greetingsReducer;
