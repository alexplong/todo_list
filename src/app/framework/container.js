const container = () => {
  // let mainContainer = document.querySelector('content');

  const content = document.createElement("div");
  const leftPanel = document.createElement("div");
  const rightPanel = document.createElement("div");
  const midPanel = document.createElement("div");

  content.setAttribute("class", "container");
  leftPanel.setAttribute("class", "left-panel");
  rightPanel.setAttribute("class", "right-panel");
  midPanel.setAttribute("class", "mid-panel");
  content.append(leftPanel, midPanel, rightPanel);
  return content;
};

export default container;
