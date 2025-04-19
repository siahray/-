function showSecond(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "flex";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("back").style.display = "none";
}

function showThird(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "flex";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("back").style.display = "none";
}

function showFourth(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "flex";
  document.getElementById("back").style.display = "none";
}

function goBack(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("back").style.display = "flex";
}

function reset(){
  document.getElementById("first").style.display = "flex";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("back").style.display = "none";
}

