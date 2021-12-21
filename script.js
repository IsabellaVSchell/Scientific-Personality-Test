var questioncount = 0;
const answer = [];
answerString = ""


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");


q1a1.onclick = function S() {
  if(answer[0] == "Q"){
    quizBtn2.css("background-color", "#38A82E");
  }
  answer[0]= "S"
  questioncount += 1
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
  }
}

q1a2.onclick = function Q() {
  if(answer[0] == "S"){
    quizBtn1.css("background-color", "#38A82E");
  }
  answer[0]= "Q";
  questioncount += 1;
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
  }
}

q2a1.onclick = function D() {
  if(answer[1] == "H"){
    quizBtn4.css("background-color", "#38A82E");
  }
  answer[1]= "D";
  questioncount += 1;
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
}
}

q2a2.onclick = function H() {
  if(answer[1] == "D"){
    quizBtn3.css("background-color", "#38A82E");
  }
  answer[1]= "H";
  questioncount += 1;
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
  }
}

q3a1.onclick = function BR() {
  if(answer[2] == "F"){
    quizBtn6.css("background-color", "#38A82E");
  }
  answer[2]= "B";
  questioncount += 1;
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
}
}

q3a2.onclick = function N() {
  if(answer[2] == "B"){
    quizBtn5.css("background-color", "#38A82E");
  }
  answer[2]= "F";
  questioncount += 1;
  if (questioncount > 3) {
    if(answer[3] == "G"){
      updateResult();
    }
    else if(answer[3] == "L"){
      updateResult();
    }
}
}

q4a1.onclick = function BO() {
  if(answer[3] == "L"){
    quizBtn8.css("background-color", "#38A82E");
  }
  answer[3]= "G";
  questioncount += 1;
  if (questioncount > 3) {
      updateResult();   
  }
}

q4a2.onclick = function T() {
  if(answer[3] == "G"){
    quizBtn7.css("background-color", "#38A82E");
  }
  answer[3]= "L";
  questioncount += 1;
  if (questioncount > 3) {
      updateResult();   
  }
}



function updateResult() {
  var result = document.getElementById("result");
  var explanation = document.getElementById("explanation");
  for (let i = 0; i < answer.length; i++) { 
    answerString += answer[i]
  }
  result.innerHTML = "Your Personality is " + answerString;
  if (answerString == "SHBG") {
    explanation.innerHTML = "The SDBB type ..."
  }else if (answerString == "SDBT") {
    explanation.innerHTML = "The SDBT type ..."
  }else if (answerString == "SDNB") {
    explanation.innerHTML = "The SDNB type ..."
  }else if (answerString == "SHBB") {
    explanation.innerHTML = "The SHBB type ..."
  }else if (answerString == "SHBT") {
    explanation.innerHTML = "The SHBT type ..."
  }else if (answerString == "SHNB") {
    explanation.innerHTML = "The SHNB type ..."
  }else if (answerString == "SDNT") {
    explanation.innerHTML = "The SDNT type ..."
  }else if (answerString == "SHNT") {
    explanation.innerHTML = "The SHNT type ..."
  }else if (answerString == "QDBB") {
    explanation.innerHTML = "The QDBB type ..."
  }else if (answerString == "QDBT") {
    explanation.innerHTML = "The QDBT type ..."
  }else if (answerString == "QDNB") {
    explanation.innerHTML = "The QDNB type ..."
  }else if (answerString == "QHBB") {
    explanation.innerHTML = "The QHBB type ..."
  }else if (answerString == "QHBT") {
    explanation.innerHTML = "The QHBT type ..."
  }else if (answerString == "QHNB") {
    explanation.innerHTML = "The QHNB type ..."
  }else if (answerString == "QDNT") {
    explanation.innerHTML = "The QDNT type ..."
  }else if (answerString == "QHNT") {
    explanation.innerHTML = "The QHNT type ..."
  }
}



var quizBtn1 = $(".quizBtn1");

quizBtn1.on("click", changeColor1);

function changeColor1(){
  quizBtn1.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn2 = $(".quizBtn2");

quizBtn2.on("click", changeColor2);

function changeColor2(){
  quizBtn2.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn3 = $(".quizBtn3");


quizBtn3.on("click", changeColor3);

function changeColor3(){
  quizBtn3.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn4 = $(".quizBtn4");

quizBtn4.on("click", changeColor4);

function changeColor4(){
  quizBtn4.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn5 = $(".quizBtn5");

quizBtn5.on("click", changeColor5);

function changeColor5(){
  quizBtn5.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}

var quizBtn6 = $(".quizBtn6");

quizBtn6.on("click", changeColor6);

function changeColor6(){
  quizBtn6.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn7 = $(".quizBtn7");

quizBtn7.on("click", changeColor7);

function changeColor7(){
  quizBtn7.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}


var quizBtn8 = $(".quizBtn8");

quizBtn8.on("click", changeColor8);

function changeColor8(){
  quizBtn8.css("background-color", "#BAFFAD");
  console.log("is this function working?");
}
