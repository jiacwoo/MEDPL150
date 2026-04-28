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
}

document.getElementById("back").onclick = function(e) {
  e.stopPropagation();
  if (index > 0) {
    index--;
    document.getElementById("text").innerText = dialogue[index];
  }
};

if (index == 2) {

}
