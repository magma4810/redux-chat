import { createButton,send } from "./send";

export function messageInput(){
    const container = document.querySelector('.send-messages-container');
    const messageContainer = document.createElement('div');
    const input = document.createElement('input');
    input.placeholder = 'Enter your message';
    input.className = 'input message';
    messageContainer.append(input);
    createButton(messageContainer);
    container.append(messageContainer);
    send();
}