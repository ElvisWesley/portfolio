const darkModeToggle = document.querySelector("#dark-mode-toggle");
const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.removeItem("darkMode");
};

darkModeToggle.addEventListener("click", () => {
  const currentMode = document.body.classList.contains("dark");
  console.log("TEST!")
  if (currentMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});