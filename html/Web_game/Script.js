let index = 0;
const text = document.getElementById("text");
const dialogue = [
  "Your head hurts.",
  "You hear something breathing nearby...",
  "..."
];

document.addEventListener("click", nextLine);
function nextLine() {
  if (index < dialogue.length - 1) {
    index++;
    text.innerText = dialogue[index];
  }
  if (index == 2) {
    document.getElementById("choice_1").style.display = "block";
    document.getElementById("choice_2").style.display = "block";
    document.getElementById("choice_3").style.display = "block";
  }
  else if (index < 2) {
    document.getElementById("choice_1").style.display = "none";
    document.getElementById("choice_2").style.display = "none";
    document.getElementById("choice_3").style.display = "none";
  }
};

document.getElementById("back").onclick = function(e) {
  e.stopPropagation();
  if (index > 0) {
    index--;
    document.getElementById("text").innerText = dialogue[index];
  }
};
