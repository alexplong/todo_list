const addForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const priority = document.createElement("select");
  const submit = document.createElement("button");

  form.setAttribute("class", "hidden");
  input.setAttribute("type", "text");
  priority.setAttribute("name", "Priority");

  submit.textContent = "Submit";
  const priorityChoose = document.createElement("option");
  priorityChoose.setAttribute("value", "none");
  priorityChoose.setAttribute("selected", "selected");
  priorityChoose.textContent = " -- Choose Priority -- ";
  const priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "low");
  priorityLow.textContent = "Low";
  const priorityMed = document.createElement("option");
  priorityMed.setAttribute("value", "med");
  priorityMed.textContent = "Med";
  const priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "high");
  priorityHigh.textContent = "High";

  priority.append(priorityChoose, priorityLow, priorityMed, priorityHigh);

  form.append(input, priority, submit);

  return form;
};

export default addForm;
