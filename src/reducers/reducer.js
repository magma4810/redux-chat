const initialState = {
  isLoading: false,
  data: undefined,
  error: undefined,
  initial: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        error: undefined,
        initial: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: undefined,
        initial: true,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: action.error,
      };
    default:
      return state;
  }
};
