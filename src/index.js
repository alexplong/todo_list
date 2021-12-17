import "./main.scss";
import header from "./app/framework/header";
import container from "./app/framework/container";

(() => {
  const main = document.getElementById("content");

  main.append(header(), container());
})();
