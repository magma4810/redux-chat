// import { getMessagesList } from "../messagesApi";

// // Создаем начальное состояние
// const initialState = {
//   loading: false,
//   error: null,
//   data: null
// };
// // Создаем редюсер
// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'FETCH_DATA_START':
//       return {
//         ...state,
//         loading: true,
//         error: null
//       };
//     case 'FETCH_DATA_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         data: action.payload
//       };
//     case 'FETCH_DATA_ERROR':
//       return {
//         ...state,
//         loading: false,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// }

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
