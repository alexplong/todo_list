import addToDo from "./addtodo";
import projectLists from "./addlist";

const addForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const list = document.createElement("option");
  const priority = document.createElement("select");
  const submit = document.createElement("button");
  const priorityChoose = document.createElement("option");
  const priorityLow = document.createElement("option");
  const priorityMed = document.createElement("option");
  const priorityHigh = document.createElement("option");

  form.setAttribute("class", "hidden");
  input.setAttribute("type", "text");
  list.setAttribute("name", "list");
  priority.setAttribute("name", "priority");
  priorityChoose.setAttribute("value", "none");
  priorityChoose.setAttribute("selected", "selected");
  priorityLow.setAttribute("value", "low");
  priorityMed.setAttribute("value", "med");
  priorityHigh.setAttribute("value", "high");

  priorityChoose.textContent = " -- Choose Priority -- ";
  priorityLow.textContent = "Low";
  priorityMed.textContent = "Medium";
  priorityHigh.textContent = "High";
  submit.textContent = "Submit";

  priority.append(priorityChoose, priorityLow, priorityMed, priorityHigh);
  form.append(input, priority, submit);

  submit.onclick = function (e) {
    e.preventDefault();
    // console.log(this);
    // console.log(input.value, priority.value);
    // addToDo(input.value, list, priority.value);
    addToDo(input.value, "general", priority.value);
  };

  about.onclick = function (e) {
    addToDo().getList;
  };

  return form;
};

export default addForm;
