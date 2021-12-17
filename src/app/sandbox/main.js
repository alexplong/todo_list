import addToDo from "./todo";

const sandbox = (() => {
  // cache DOM
  const addButton = document.querySelector("add-button");

  // Listening events
  addButton.addEventListener("click", () => {
    console.log("click");
  });
})();
