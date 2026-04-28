const dialogue = [
  "You wake up in a dark room...",
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
