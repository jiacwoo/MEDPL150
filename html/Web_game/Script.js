const dialogue = [
  "Your head hurts.",
  "You hear something breathing nearby...",
  "..."
];

let index = 0;
const text = document.getElementById("text");

function nextLine() {
  if (index < dialogue.length - 1) {
    index++;
    text.innerText = dialogue[index];
  }
}

document.addEventListener("click", nextLine);

document.getElementById("backBtn").onclick = function(e) {
  e.stopPropagation(); // prevents triggering next dialogue

  if (index > 0) {
    index--;
    document.getElementById("text").innerText = dialogue[index];
  }
};
