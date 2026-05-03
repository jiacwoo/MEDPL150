let index = 0;
let index2 = 0;
let end1 = false;
let end2 = false;
const text = document.getElementById("text");
let dialogue = [
  "You wake up standing in front of a basement door.",
  "You don’t remember how you got here.",
  "That’s fine. It’s not important.",
  "What is important is what’s behind that door.",
  "There is something dangerous down there.",
  "You need to deal with it.",
];

document.getElementById("choice_1").innerText = "Enter immediately";
document.getElementById("choice_2").innerText = "Hesitate and listen";
document.getElementById("choice_3").innerText = "Refuse to go down";
document.addEventListener("click", nextLine);
function nextLine() {
  if (index2 == 1 && index == dialogue.length - 1 && end1 == true) {
      window.location.assign("ending_1.html");
  }
  else if (index2 == 1 && index == dialogue.length - 1 && end2 == true) {
      window.location.assign("ending_2.html");
  }
  else if (index2 == 1 && index == dialogue.length - 1 && end3 == true) {
      window.location.assign("ending_2.html");
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
      "The door creaks open",
      "You step down.",
      "One step. Two. Three.",
      "The door shuts behind you.",
      "...",
      "There’s someone in the center of the room.",
      "Sitting in a chair.",
      "Tied up.",
      "Waiting.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 1;
    document.getElementById("choice_1").innerText = "Untie Them";
    document.getElementById("choice_2").innerText = "Ask who they are";
    document.getElementById("choice_3").innerText = "Leave them";
  }
  else if (index2 == 1) {
    dialogue = [
      "You step forward.",
      "Stop. That’s a mistake.",
      "You ignore it.,",
      "Your fingers work at the knots.",
      "The person leans closer.",
      "The final knot loosens.",
      "The ropes fall to the floor",
      "...",
      "Something feels wrong.",
      "Then their expression changes.",
      "Then the lights go out.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end1 = true;
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
      "You don’t move.",
      "Who are you? you ask.",
      "It doesn’t matter who it is.",
      "You have a job to do.",
      "The person tilts their head.",
      "That's not what you asked last time.",
      "Do you want to know the truth?",
      "The person smiles.",
      "You put me there.",
      "Everything goes quiet.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end2 = true;
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
      "You take a step back.",
      "You turn toward the stairs.",
      "You climb the stairs.",
      "You open the door.",
      "You step through.",
      "The house is gone.",
      "You are standing in front of the basement door.",
      "The narrator sighs.",
      "Let's try this again.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    ;
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
