function sambaClass() {
  let name = prompt("Olá, What is your name?");
  let email = prompt("What is your email address?");
  let learn = prompt("Do you want to learn to dance Samba?");
  if (learn === "yes") {
    alert(
      "Hi " +
        name +
        " we will be in touch and would be delighted to have you join us! 💃"
    );
  } else {
    alert("☹ that's a shame " + name + " maybe next time");
  }
}
let danceButton = document.querySelector("button");

danceButton.addEventListener("click", sambaClass);
