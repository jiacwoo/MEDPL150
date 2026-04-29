let index = 0;
const text = document.getElementById("text");
let dialogue = [
  "Your head hurts.",
  "You hear something breathing nearby...",
  "...",
];

document.addEventListener("click", nextLine);
function nextLine() {
  if (index < dialogue.length - 1) {
    index++;
    text.innerText = dialogue[index];
  }
  if (index == dialogue.length-1) {
    document.getElementById("choice_1").style.display = "block";
    document.getElementById("choice_2").style.display = "block";
    document.getElementById("choice_3").style.display = "block";
  }
};

document.getElementById("back").onclick = function(e) {
  e.stopPropagation();
  if (index > 0) {
    index--;
    document.getElementById("text").innerText = dialogue[index];
  }
  if (index < dialogue.length) {
    document.getElementById("choice_1").style.display = "none";
    document.getElementById("choice_2").style.display = "none";
    document.getElementById("choice_3").style.display = "none";
  }
};

document.getElementById("choice_1").onclick = function(e) {
  e.stopPropagation();
  index = 0;
  dialogue = [
    "aaa",
    "Yatha...",
    "vbasfdas.",
    "adasd",
  ];
  document.getElementById("text").innerText = dialogue[index];
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
};

document.getElementById("choice_2").onclick = function(e) {
  e.stopPropagation();
  index = 0;
  dialogue = [
    "apple",
    "cheese",
    "dorito.",
    "banana",
  ];
  document.getElementById("text").innerText = dialogue[index];
};

document.getElementById("choice_3").onclick = function(e) {
  e.stopPropagation();
  index = 0;
  dialogue = [
    "amongs",
    "sus",
    "dasdascxzxx.",
    "aaaaaa",
  ];
  document.getElementById("text").innerText = dialogue[index];
};
