import { sendMessage } from "../messagesApi";
import { createCart } from "./messagesList";
import { addMessage } from "../actions/action";
import store from "../store/createStore";

export function createButton(element) {
  const button = document.createElement("button");
  button.className = "send-button";
  const send = document.createElement("div");
  send.className = "send";
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
    store.dispatch(addMessage(data));

    createCart(messagesElement, data);
    window.scrollTo(0, document.body.scrollHeight);
  });
}
