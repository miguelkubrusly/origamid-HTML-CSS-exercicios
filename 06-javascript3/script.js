const url = document.URL;

const activateCurrentLink = (pageUrl) => {
  const currentLink = pageUrl.slice(pageUrl.lastIndexOf("/"));
  const currentAnchor = document.querySelector(`a[href=".${currentLink}"]`);
  console.log({ currentAnchor, currentLink });
  currentAnchor.className = "ativo";
};

activateCurrentLink(url);
