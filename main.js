let isStartExist = false;
let isStopExist = false;
let intervalId = null;
let buttonId = null;
let audio;

function doSome() {

    let height = window.screen.height * 0.8;
    let width = window.screen.width * 0.8;

    let rndHeigth = getRndInteger(0, height);
    let rndWidth = getRndInteger(0, width);
    let rndColor = getRandomColor();
    let btn = createBnt(rndWidth, rndHeigth, rndColor);
    let startSomeNum = getRndInteger(0, 5);

    if (startSomeNum == 1 && !isStartExist) {
        isStartExist = true;
        buttonId = uuidv4();
        btn.innerHTML = "START SOME";
        btn.setAttribute('onclick', 'startSome(this.id)');
        btn.setAttribute('id', buttonId);
        btn.style.zIndex = '100000';
    }
    else if (startSomeNum == 3 && isStartExist && !isStopExist) {
        isStopExist = true;
        btn.innerHTML = "STOP SOME";
        btn.setAttribute('onclick', 'stopSome()');
        btn.style.zIndex = '100000';
    }
    else {
        btn.innerHTML = "DO SOME";
        btn.setAttribute('onclick', 'doSome()');
    }
    document.body.appendChild(btn);
}

function doSomeNext(){

}

function createBnt(rndWidth, rndHeigth, rndColor) {
    var btn = document.createElement("Button");
    btn.className = "btn btn-success btn-lg fun-btn";
    btn.style = "position: absolute; left:" + rndWidth + "px; top:" + rndHeigth + "px; background-color:" + rndColor;
    return btn;
}

function stopSome() {
    audio.pause();
    document.body.style.background = '#ffffff';
    removeElementsByClass('fun-btn')
    clearInterval(intervalId)
    document.getElementById('main-btn').setAttribute('onclick','doSomeNext()');
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function startSome(event) {
    if (intervalId === null) {
        audio = new Audio('sound.mp3');
        audio.loop = true;
        audio.play();
        intervalId = setInterval(() => {
            doSome();
            document.body.style.background = getRandomColor();
        }, 50)
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function uuidv4() {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}