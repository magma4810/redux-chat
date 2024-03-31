export function createCart(messagesElement, obj) {
  const objectDiv = document.createElement("div");
  objectDiv.classList = "message-list";
  messagesElement.append(objectDiv);

  const nameElement = document.createElement("h3");
  nameElement.style = "margin-left: 10px";
  nameElement.textContent = obj.nickname || obj.name;

  const descriptionElement = document.createElement("p");
  descriptionElement.style = "margin-left: 10px; font-size: 15px;";
  descriptionElement.textContent = obj.message;

  const timeElement = document.createElement("h4");
  timeElement.style = "margin-left: 10px; color: grey;";
  timeElement.textContent = obj.date;

  objectDiv.append(nameElement);
  objectDiv.append(descriptionElement);
  objectDiv.append(timeElement);
}

export function messagesList(messages, messagesElement) {
  messages.forEach((obj) => {
    createCart(messagesElement, obj);
  });
  messagesElement.removeChild(document.querySelector(".load"));
  window.scrollTo(0, document.body.scrollHeight);
}
