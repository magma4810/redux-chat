import { getMessagesList } from "./messagesApi.js";
import { messagesList } from "./components/messagesList.js";
import { messageInput } from "./components/message.js";
import { nicknameInput } from "./components/nickname.js";
import * as actions from "./actions/action.js";
import store from "./store/createStore.js";
import "./style.css";

const messagesElement = document.querySelector(".messages");

function loadData() {
  return (dispatch) => {
    dispatch(actions.loading());
    nicknameInput();
    messageInput();
    getMessagesList()
      .then((response) => {
        dispatch(actions.success(response));
      })
      .catch((err) => {
        dispatch(actions.error(err));
      });
  };
}

const render = (props) => {
  if (props.isLoading) {
    return (messagesElement.innerHTML = `<div class='load'>Loading...</div>`);
  }
  if (props.error) {
    return (messagesElement.innerHTML = `<h1 style="color: red">${props.error.message}</h1>`);
  }
  if (props.initial) {
    messagesList(props.data, messagesElement);
    return;
  }
  if (props.data) {
    return;
  }
  messagesElement.innerHTML = `<button class='watch'>Watch Chat</button>`;
  messagesElement
    .querySelector(".watch")
    ?.addEventListener("click", () => store.dispatch(loadData()));
};

const selectData = (state) => ({
  isLoading: state.isLoading,
  initial: state.initial,
  data: state.data,
  error: state.error,
});

render(selectData(store.getState()));
store.subscribe(() => render(selectData(store.getState())));
