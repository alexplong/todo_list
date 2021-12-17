const container = () => {
  // let mainContainer = document.querySelector('content');

  const content = document.createElement("div");
  const leftPanel = document.createElement("div");
  const rightPanel = document.createElement("div");
  const midPanel = document.createElement("div");

  content.setAttribute("id", "container");
  leftPanel.setAttribute("id", "left-panel");
  rightPanel.setAttribute("id", "right-panel");
  midPanel.setAttribute("id", "mid-panel");
  content.append(leftPanel, midPanel, rightPanel);
  return content;
};

export default container;
