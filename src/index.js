import "./main.scss";
import header from "./app/framework/header";
import container from "./app/framework/container";
import addTodo from "./app/sandbox/addtodo";
import addForm from "./app/sandbox/addform";

(() => {
  // site framework from modules
  const main = document.getElementById("content");
  main.append(header(), container());

  // cache DOM
  const homeButton = document.getElementById("home-button");
  const aboutButton = document.getElementById("about-button");
  const addButton = document.getElementById("add-button");
  const leftPanel = document.getElementById("left-panel");
  const midPanel = document.getElementById("mid-panel");
  const rightPanel = document.getElementById("right-panel");

  addButton.onclick = function (e) {
    midPanel.append(addForm()); // change this to toggle instead later
  };
})();
