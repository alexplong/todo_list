const projectLists = () => {
  let projects = ["General", "Work", "Daily"];

  projects.forEach((project) => {
    project = [];
  });

  const projectToDos = (task, project) => {
    // something done here
    let x = task;
    let y = project;
    console.log(x, "----", y);
  };
  const getProjects = () => projects;
  const getToDos = (project) => {
    console.log(project);
  };
  const addProject = (project) => projects.push(project);
  const delProject = (project) => {
    projects.splice(projects.findIndex(project), 1, project);
  };

  return { getProjects, projectToDos, getToDos, addProject, delProject };
};

export default projectLists;
