import { getMessagesList } from "./messagesApi.js";
import { messagesList } from "./components/messagesList.js";
import { messageInput } from "./components/message.js";
import { nicknameInput } from "./components/nickname.js";
import store from "./store/createStore.js";
import "./style.css";

const messagesElement = document.querySelector(".messages");
const messagesFirst = await getMessagesList();
messagesList(messagesFirst, messagesElement);
nicknameInput();
messageInput();
const handleStateChange = () => {
  const state = store.getState();
  const messages = state.messages;
  messagesList(messages, messagesElement);
};

store.subscribe(handleStateChange);
