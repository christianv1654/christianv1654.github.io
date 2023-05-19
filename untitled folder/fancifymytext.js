function biggerButtonClicked() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function radioButtonSelect() {
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");
    var textInput = document.getElementById("textInput");

    if (fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "";
        textInput.style.textDecoration = "";
    }
}

function uppercaseText() {
    var textInput = document.getElementById("textInput");
    textInput.value = textInput.value.toUpperCase();
}

function addMooSuffix() {
    var textInput = document.getElementById("textInput");
    var sentences = textInput.value.split("."); 
  
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");
  
      if (words.length > 0) {
        var lastWordIndex = words.length - 1;
        if (words[lastWordIndex] !== "") {
          words[lastWordIndex] += "-Moo";
        }
      }
  
      sentences[i] = words.join(" ");
    }
  
    textInput.value = sentences.join(". ");
  }


function mooButton() {
    uppercaseText();
    addMooSuffix();
}