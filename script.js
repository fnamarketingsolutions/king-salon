const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const questions = document.querySelectorAll(".accordion details");

questions.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    questions.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
