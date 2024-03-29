import { increment, decrement } from "./action";

export function createCounter(element, store) {
  const buttonMinus = document.createElement("button");
  const buttonPlus = document.createElement("button");
  const counter = document.createElement("span");

  counter.style = "margin: 0px 10px";
  element.style = "display: flex; justify-content: center; margin: 300px 0px";

  buttonMinus.textContent = "-";
  buttonPlus.textContent = "+";
  counter.textContent = "0";

  buttonPlus.addEventListener("click", () => {
    store.dispatch(increment());
  });
  buttonMinus.addEventListener("click", () => {
    store.dispatch(decrement());
  });
  store.subscribe(() => {
    counter.textContent = store.getState();
  });

  element.append(buttonMinus);
  element.append(counter);
  element.append(buttonPlus);
}
