export const addMessage = (data) => ({
  type: "ADD_MESSAGE",
  payload: data,
});

export const loading = () => ({
  type: "LOADING",
});

export const success = (payload) => ({
  type: "SUCCESS",
  payload,
});

export const error = (error) => ({
  type: "ERROR",
  error,
});
