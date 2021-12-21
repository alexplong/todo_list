import projectLists from "./projects";

const addToDo = (task, list, priority) => {
  // object generator
  const _getTask = () => task;
  const _getList = () => list;
  const _getPriority = () => priority;
  const _getDateAdded = () => new Date().toUTCString();

  const makeToDo = () => {
    let x = {
      task: _getTask(),
      list: _getList(),
      priority: _getPriority(),
      added: _getDateAdded(),
    };
    console.log(x);
    projectLists().projectToDos(_getTask, _getList());
  };

  return {
    makeToDo,
    _getTask,
  };
};

export default addToDo;
