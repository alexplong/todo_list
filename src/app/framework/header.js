const header = () => {
  // cache DOM
  const navBar = document.createElement('header');

  // create buttons
  const linksContainer = document.createElement("div");
  const homeLink = document.createElement("button");
  const aboutLink = document.createElement("button");
  const addLink = document.createElement("button");


  // apply class and ID  
  navBar.setAttribute("class", 
        "header flex flex-dir-r flex-jc-sb flex-ai-c h3 m-3");
  homeLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");
  aboutLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");
  addLink.setAttribute("class", 
        "btn btn-outline-secondary m-1");

  homeLink.setAttribute("id", "home-button");
  aboutLink.setAttribute("id", "about-button");
  addLink.setAttribute("id", "menu-button");


  navBar.textContent = "OoOodles of Noodles";
  homeLink.textContent = "Home";
  aboutLink.textContent = "About";
  addLink.textContent = "Add +";


  // click events for buttons

  linksContainer.append(homeLink, aboutLink, addLink);
  navBar.append(linksContainer);
  return navBar;
};

export default header