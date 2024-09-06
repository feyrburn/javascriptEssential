let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// document.getElementById("btn").onclick = startTest();

function startTest(){
    document.getElementById("inputText").value = testText;

    document.getElementById("output").innerHTML = "";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    startTime = new Date().getTime();

    // var button = document.getElementById("btn");
    // button.innerHTML = "End Test";
    // button.onclick = endTest();
}

function endTest(){
    endTime = new Date().getTime();

    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;
    var userTypedLength = userTypedText.length;

    var typedWords = userTypedText.split(/\s+/).filter(function(word) {
        return word !== "";
    }).length;

    var wpm = 0;
    if(timeElapsed!== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Total Length: " + userTypedLength + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed + "</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // var button = document.getElementById("btn");
    // button.innerHTML = "Start Test";
    // button.onclick = startTest();
}