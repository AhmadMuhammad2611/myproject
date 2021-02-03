/*******JavaScript*****/

var header = document.getElementById("header"),
    btnRight = document.getElementById("btn-right"),
    btnLeft = document.getElementById("btn-left"),
    timer,
    i = 1;

btnRight.onclick = function () {
    "use strict";
    if (i < 4) {
        i++;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    } else {
        i = 1;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    }
    
    clearInterval(timer);
        
}

btnLeft.onclick = function () {
    "use strict";
    if (i > 1) {
        i--;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    } else {
        i = 4;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    }
    
    clearInterval(timer);
        
}

var timer = setInterval(function () {
    "use strict";
    if (i < 4) {
        i++;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    } else {
        i = 1;
        header.style.backgroundImage = "url(img/" + i + ".jpg)";
    }
    
}, 1500)

/**************** open products *********/

function openHome() {
    "use strict";
    window.open("index.html", "_self", "");
}

function openPhones() {
    "use strict";
    window.open("miphone.html", "_self", "");
}

function openTv() {
    "use strict";
    window.open("mitv.html", "_self", "");
}

function openContact() {
    "use strict";
    window.open("signin.html", "_self", "");
}

/************** open video **********/

document.getElementById("vid1").onclick = function () {
    "use strict";
    window.open("https://youtu.be/-nRqVdHYUZ0", "_blank", "");
}

document.getElementById("vid2").onclick = function () {
    "use strict";
    window.open("https://youtu.be/K9_g6_fqVBc", "_blank", "");
}

document.getElementById("vid3").onclick = function () {
    "use strict";
    window.open("https://youtu.be/ADCPxT__ng4", "_blank", "");
}