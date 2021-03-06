const addToDo = (task, list, priority) => {
  const getTask = () => task;
  const getList = () => list;
  const getPriority = () => priority;
  const getDateAdded = () => new Date().toUTCString();

  const updateTask = (updatedTask) => (task = updatedTask);
  const updatePriority = (updatedPriority) => (priority = updatedPriority);

  return {
    getTask,
    getList,
    getPriority,
    getDateAdded,
    updateTask,
    updatePriority,
  };
};

export default addToDo;
