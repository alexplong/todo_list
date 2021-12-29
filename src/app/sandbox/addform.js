import newToDo from "./addtodo";
import projectLists from "./projects";

const addForm = () => {
  // todo input form UI
  const form = document.createElement("form");
  const input = document.createElement("input");
  const list = document.createElement("select");
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

  // Projects pull down menu
  projectLists()
    .getProjects()
    .forEach((project) => {
      let listItem = document.createElement("option");
      listItem.setAttribute("value", project);
      listItem.textContent = project;
      list.append(listItem);
    });

  priority.append(priorityChoose, priorityLow, priorityMed, priorityHigh);
  form.append(input, priority, list, submit);

  // event listener for buttons
  submit.onclick = function (e) {
    e.preventDefault();
    let newTask = newToDo(input.value, list.value, priority.value).addToList();
  };

  return form;
};

export default addForm;
