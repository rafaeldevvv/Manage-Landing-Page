const navListContainer = document.querySelector(".around");

document.querySelector("#toggle-nav-button").addEventListener("click", () => {
  const visible = navListContainer.getAttribute("data-visible");

  navListContainer.setAttribute(
    "data-visible",
    visible == "true" ? false : true
  );
});

const balls = Array.from(document.querySelectorAll(".ball"));
const slider = document.querySelector(".slider");

slider.addEventListener("scroll", (e) => {
  // console.log(e.target.scrollLeft)
  // console.log(e.target.scrollWidth)

  const ballNumber = ((slider.scrollLeft / slider.scrollWidth) * 100) / 25;
  balls.forEach((b) => b.setAttribute("data-selected", false));
  balls[Math.round(ballNumber)].setAttribute("data-selected", true);
});

balls.forEach((b, i) =>
  b.addEventListener("click", () => {
    slider.scrollLeft = i * 0.25 * slider.scrollWidth;
  })
);

const emailExp = /^[\w\d]+@\w+\.\w{2,3}$/;
document.querySelector("form").onsubmit = (e) => {
  const form = e.target;
  const emailField = form.elements.email;
  const errorOutput = document.querySelector(".error-message");

  if (!emailExp.test(emailField.value)) {
    errorOutput.style.display = "block";
    emailField.classList.add("failed");
    e.preventDefault();
  } else {
    emailField.classList.remove("failed");
    errorOutput.style.display = "none";
  }
};
