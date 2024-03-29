import { sendMessage } from "../messagesApi";
import { messagesList } from "./messagesList";
import store from "../store/createStore";

export function createButton(element) {
  const button = document.createElement("button");
  button.className = "send";
  const send = document.createElement("div");
  send.innerHTML = "&#x1F4E8";
  send.className = "send";

  button.append(send);
  element.append(button);
}

export function send() {
  const nickname = document.querySelector(".nickname");
  const message = document.querySelector(".message");
  const sendButton = document.querySelector(".send");

  sendButton.addEventListener("click", async () => {
    const messagesElement = document.querySelector(".messages");
    const data = {
      nickname: nickname.value,
      message: message.value,
      date: new Date(),
    };

    nickname.value = "";
    message.value = "";
    sendMessage(data);
    store.dispatch({
      type: "ADD_MESSAGE",
      payload: data,
    });

    messagesList(store.getState().messages, messagesElement);
    window.scrollTo(0, document.body.scrollHeight);
  });
}
