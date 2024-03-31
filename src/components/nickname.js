export function nicknameInput() {
  const container = document.createElement("div");
  container.className = "send-messages-container";
  document.body.append(container);
  const input = document.createElement("input");
  input.placeholder = "Enter your nickname";
  input.className = "input nickname";
  container.append(input);
}
