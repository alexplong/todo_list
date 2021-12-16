const footer = () => {
  // cache DOM
  const x = document.createElement("footer");

  x.setAttribute("class", 
        "footer flex flex-dir-r flex-jc-c flex-ai-c m-3");
  x.textContent = "Created by Alex Plong - The Odin Project";
  
  return x;
};

export default footer;