const startButton = document.querySelector("#start");
const onBoarding = document.querySelector("#onboarding");
const signup = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const continueButton = document.querySelector("#continue");
const showButton = document.querySelector("#show");

startButton.addEventListener("click", (e) => {
  onBoarding.classList.add("fadeout");
  setTimeout(() => {
    signup.classList.add("fadein");
  }, 800);
});

password.addEventListener("input", () => {
  if (password.value !== "" && email.value !== "") {
    continueButton.removeAttribute("disabled");
  }
});

email.addEventListener("input", () => {
  if (password.value !== "" && email.value !== "") {
    continueButton.removeAttribute("disabled");
  }
});

showButton.addEventListener("click", (e) => {
  const type = password.getAttribute("type");
  if (type === "text") {
    password.setAttribute("type", "password");
  } else {
    password.setAttribute("type", "text");
  }
});
