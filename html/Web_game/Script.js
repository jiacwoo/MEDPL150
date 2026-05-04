let index = 0;
let index2 = 0;
let end = false;
const text = document.getElementById("text");
speaker.innerText = "Narrator";
let dialogue = [
  "eeeeeeeeeeeeeeeeeee",
  "You wake up standing in front of a basement door.",
  "You don’t remember how you got here.",
  "That’s fine. It’s not important.",
  "What is important is what’s behind that door.",
  "There is something dangerous down there.",
  "You need to deal with it.",
];

document.getElementById("choice_1").innerText = "you ask him out";
document.getElementById("choice_2").innerText = "you wuss out";
document.getElementById("choice_3").innerText = "murder";
document.addEventListener("click", nextLine);
function nextLine() {
  if (index2 == 1 && index == dialogue.length - 1 && end == true) {
      window.location.assign("ending_1.html");
  }
  else if ((index2 == 2 || index2 == 3) && index == dialogue.length - 1 && end == true) {
      window.location.assign("ending_2.html");
  }
  if (index < dialogue.length - 1) {
    index++;
    text.innerText = dialogue[index];
  }
  if (index == dialogue.length-1 && end == false) {
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
  if (index2 == 0) {
    dialogue = [
      "senpai says yes1",
      "omg",
      "yaaayyyy",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 1;
    document.getElementById("choice_1").innerText = "go to hotel";
    document.getElementById("choice_2").innerText = "go home together";
    document.getElementById("choice_3").innerText = "say goodbye to him";
  }
  else if (index2 == 1) {
    dialogue = [
      "oh my god its my first time going to a hotel!",
      "im so happy!!!!",
      "eeeeeeeeeeeeee",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 2) {
    dialogue = [
      "you run after him",
      "you see him with another girl",
      "your vision turns red and you remember the glock your mom gave you",
      "you take a deep breath and whip it out",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 3) {
    dialogue = [
      "you grab your hidden knife and plunge it into his heart",
      "you stick your hand in it and feel the pulse disapear",
      "now your mine foreverrrr.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
}
document.getElementById("choice_2").onclick = function(e) {
  e.stopPropagation();
  index = 0;
  if (index2 == 0) {
    dialogue = [
      "you sad",
      "you run home",
      "jump in bed and start kicking you feet",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 2;
    document.getElementById("choice_1").innerText = "go back out and find him";
    document.getElementById("choice_2").innerText = "call your friend jonathan";
    document.getElementById("choice_3").innerText = "buy alchohol";
  }
 else if (index2 == 1) {
    dialogue = [
      "wow i never knew we lived so close",
      "can i go inside?",
      "pwease sempai.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 2) {
    dialogue = [
      "jonathan tells you to be more aggresive",
      "apparently dudes like their women aggresive",
      "you see senpai and you jump on him.",
      "but he falls and hits his head",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 3) {
    dialogue = [
      "you take out your precoiouse glock",
      "sempai if i cant you no one cannn",
      "you shoot him 25 times.",
      "pew pew pew",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
};

document.getElementById("choice_3").onclick = function(e) {
  e.stopPropagation();
  index = 0;
  if (index2 == 0) {
    dialogue = [
      "you think about klling sempai",
      "how should you do it?",
    ];
    document.getElementById("text").innerText = dialogue[index]; 
    index2 = 3;
    document.getElementById("choice_1").innerText = "knife";
    document.getElementById("choice_2").innerText = "gun";
    document.getElementById("choice_3").innerText = "bomb";
  }
  else if (index2 == 1) {
    dialogue = [
      "awh goodby sempai",
      "see you tomorow",
      "(i hope we can get closer).",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 2) {
    dialogue = [
      "you start drinking pure vodka",
      "then you remember that senpai was talking to a girl earlier",
      "you go and find sempai to talk to him",
      "but you accidently take our your glock",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  else if (index2 == 3) {
    dialogue = [
      "you go to your chem lab",
      "you make a c4",
      "then you force senpai to swallow.",
      "THEN YOU BOOOMMMM",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end = true;
  }
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
};
