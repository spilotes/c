let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Tìshók";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
