export function nicknameInput() {
  const container = document.querySelector(".send-messages-container");
  const input = document.createElement("input");
  input.placeholder = "Enter your nickname";
  input.className = "input nickname";
  container.append(input);
}
