// Practice with Forms and the DOM Event Model 

// STEP 1
/*
function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}
*/

// STEP 2
/*
var btn2 = document.getElementById("step2");
btn2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};
*/

// STEP 3
/*
function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}

var btn3 = document.getElementById("step3");
btn3.addEventListener("click", writeMessage);
*/

// STEP 4
/*
var btn3 = document.getElementById("step3");
btn3.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});
*/

// STEP 5
/*
function init() {
    "use strict";
    var btn3 = document.getElementById("step3");
    btn3.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init);
*/

// STEP 6
/*
var redirectLink = document.getElementById("redirect");
redirectLink.addEventListener("click", function (event) {
    "use strict";
    event.preventDefault();
    window.alert("You clicked on the Google link");
});
*/

// STEP 7
/*
var inputStep7 = document.getElementById("step7Input");
var btnStep7 = document.getElementById("step7");
btnStep7.addEventListener("click", function () {
    "use strict";
    btnStep7.disabled = true;
    window.alert(inputStep7.value);
});
*/

// STEP 8
/*
var btnStep8 = document.getElementById("step8");
btnStep8.addEventListener("click", function () {
    "use strict";
    window.open('newpage.html', 'newpage', 'width=300,height=300,resizable=yes');   
});
*/

// STEP 9
/*
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");

function logMsg() {
    "use strict";
    window.console.log("Learning Javascript is fun!");
}

function startStop() {
    "use strict";
    var id = setInterval(logMsg, 2000);
    btnStop.addEventListener("click", function () {
        clearInterval(id);
    }
        );
}

btnStart.addEventListener("click", startStop);
*/

// STEP 10
/*
var list = document.getElementById("cars");
var btnSelect = document.getElementById("selection");
btnSelect.addEventListener("click", function () {
    "use strict";
    window.alert(list.options[list.selectedIndex].text);
});
*/








