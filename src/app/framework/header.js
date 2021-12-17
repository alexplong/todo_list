const header = () => {
  // cache DOM
  const navBar = document.createElement("header");

  // create buttons
  const linksContainer = document.createElement("div");
  const homeLink = document.createElement("button");
  const aboutLink = document.createElement("button");
  const addLink = document.createElement("button");

  // apply class and ID
  navBar.setAttribute("class", "header");
  homeLink.setAttribute("class", "btn");
  aboutLink.setAttribute("class", "btn");
  addLink.setAttribute("class", "btn");

  homeLink.setAttribute("id", "home-button");
  aboutLink.setAttribute("id", "about-button");
  addLink.setAttribute("id", "add-button");

  navBar.textContent = "Do Watcha Gotta Do";
  homeLink.textContent = "Home";
  aboutLink.textContent = "About";
  addLink.textContent = "Add +";

  // click events for buttons

  linksContainer.append(homeLink, aboutLink, addLink);
  navBar.append(linksContainer);
  return navBar;
};

export default header;
