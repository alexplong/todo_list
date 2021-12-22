import projectLists from "./projects";

const newToDo = (task, list, priority) => {
  // object factory
  const _getTask = () => task;
  const _getList = () => list;
  const _getPriority = () => priority;
  const _getDateAdded = () => new Date().toUTCString();

  const addToList = () => {
    let x = {
      task: _getTask(),
      list: _getList(),
      priority: _getPriority(),
      added: _getDateAdded(),
    };
    // push object into Array. If Array not present, make one
    // how do we make one?
    console.log(projectLists().getProjects().indexOf(x["list"]));
  };

  return {
    addToList,
  };
};

export default newToDo;
