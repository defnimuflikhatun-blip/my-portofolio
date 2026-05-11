const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

year.textContent = new Date().getFullYear();
