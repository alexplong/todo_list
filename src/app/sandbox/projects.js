const projectLists = () => {
  let projects = ["General", "Work", "Daily"];

  const getProjects = () => projects;
  const makeList = (newlist) => {
    if (projects.indexOf(newlist) < 0) {
      console.log("Add list to project");
      projects.push(newlist);
    } else {
      console.log("List already in projects");
      return;
    }
  };
  const delList = (project) => {
    projects.splice(projects.findIndex(project), 1, project);
  };
  return { getProjects, makeList, delList };
};

export default projectLists;
