let index = 0;
let index2 = 0;
let end1 = false;
let end2 = false;
let end3 = false;
let end4 = false;
let end5 = false;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");

if (index === 0 || index === 1) {
  speaker.style.display = "none";
};

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
  else if (index2 == 2 && index == dialogue.length - 1 && end3 == true) {
      window.location.assign("ending_3.html");
  }
  else if (index2 == 2 && index == dialogue.length - 1 && end4 == true) {
      window.location.assign("ending_4.html");
  }
  else if (index2 == 3 && index == dialogue.length - 1 && end5 == true) {
      window.location.assign("ending_5.html");
  }
  if (index < dialogue.length - 1) {
    index++;
    text.innerText = dialogue[index];
  }
  if (index == dialogue.length-1 && end1 == false && end2 == false && end3 == false && end4 == false && end5 == false) {
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
      "You ignore it.",
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
      "You step back from the door.",
      "The narrator doesn’t respond.",
      "Not immediately.",
      "...",
      "...",
      "You leave the door behind.",
      "The narrator speaks again.",
      "Interesting",
      "You don't normally do that",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end3 = true;
  }
  else if (index2 == 3) {
    dialogue = [
      "You grit your teeth.",
      "Fine.",
      "If the house wants you downstairs, then you’ll go downstairs.",
      "The narrator sounds pleased.",
      "Good. Finally.",
      "You grab the handle.",
      "The door creaks open.",
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
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
}
document.getElementById("choice_2").onclick = function(e) {
  e.stopPropagation();

  index = 0;
  if (index2 == 0) {
    dialogue = [
      "You don’t reach for the handle.",
      "Not yet",
      "You lean closer to the door.",
      "“…please don’t come down.”",
      "The voice on the other side sounds… human.",
      "The narrator cuts in immediately",
      "Ignore that.",
      "It’s lying.",
      "The handle twitches slightly under your hand.",
      "Like something moved on the other side.",
      "Your grip tightens.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 2;
    document.getElementById("choice_1").innerText = "Believe the voice";
    document.getElementById("choice_2").innerText = "Ignore it and go down";
    document.getElementById("choice_3").innerText = "Walk away";
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
      "You shake your head.",
      "It’s just trying to trick me.",
      "Exactly.",
      "You grab the handle and open the door.",
      "The darkness below feels familiar.",
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
  else if (index2 == 3) {
    dialogue = [
      "You do nothing.",
      "The narrator says nothing.",
      "For a moment, you think you won.",
      "Then the room blinks.",
      "Not your eyes.",
      "The room.",
      "You are standing in front of the basement door again.",
      "The narrator sounds tired.",
      "Standing still is still a choice.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end5 = true;
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
      "You take your hand off the door.",
      "No.",
      "You’re not going down there.",
      "The narrator speaks slowly.",
      "That wasn’t one of your options.",
      "You step back.",
      "The door does not get farther away.",
      "You step back again.",
      "Still, the door remains in front of you.",
      "The narrator sighs.",
      "Then the basement door opens by itself.",
      "Something below whispers",
      "Don’t let it choose for you.",
    ];
    document.getElementById("text").innerText = dialogue[index]; 
    index2 = 3;
    document.getElementById("choice_1").innerText = "Force yourself to go down";
    document.getElementById("choice_2").innerText = "Stay still";
    document.getElementById("choice_3").innerText = "Leave the house";
  }
  else if (index2 == 1) {
    dialogue = [
      "You take a step back.",
      "You turn toward the stairs.",
      "The person laughs quietly.",
      "You climb the stairs.",
      "The door opens easily this time.",
      "You step through.",
      "The house is gone.",
      "You are standing in front of the basement door.",
      "The narrator sighs.",
      "Let's try this again.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 0;
    document.getElementById("choice_1").innerText = "Enter immediately";
    document.getElementById("choice_2").innerText = "Hesitate and listen";
    document.getElementById("choice_3").innerText = "Refuse to go down";
  
  }
  else if (index2 == 2) {
    dialogue = [
      "You step away from the door.",
      "This isn’t your problem.",
      "It never was.",
      "The narrator laughs quietly.",
      "You really think that?",
      "You keep walking.",
      "You don’t look back.",
      "The world fades.",
      "You are standing in front of the basement door.",
      "The handle is already in your hand.",
      "You don’t remember reaching for it.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    end4 = true;
  }
  else if (index2 == 3) {
    dialogue = [
      "You turn around and walk away.",
      "The hallway stretches longer with every step.",
      "The front door is ahead of you.",
      "TIt opens before you touch it.",
      "Outside is the basement door.",
      "The narrator laughs softly.",
      "You can leave after you finish.",
    ];
    document.getElementById("text").innerText = dialogue[index];
    index2 = 3;
    document.getElementById("choice_1").innerText = "Force yourself to go down";
    document.getElementById("choice_2").innerText = "Stay still";
    document.getElementById("choice_3").innerText = "Leave the house";
  }
  document.getElementById("choice_1").style.display = "none";
  document.getElementById("choice_2").style.display = "none";
  document.getElementById("choice_3").style.display = "none";
};
