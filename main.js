let isStartSome = false;
let isStopSome = false;
let intervalId = null;
let buttonId = null;
function doSome() {

    let height = window.screen.height * 0.75;
    let width = window.screen.width * 0.91;

    let rndHeigth = getRndInteger(0, height);
    let rndWidth = getRndInteger(0, width);
    let rndColor = getRandomColor();

    let startSomeNum = getRndInteger(0, 5);
    //let startSomeNum =1;

    var btn = document.createElement("Button");

    btn.className = "btn btn-success btn-lg";
    btn.style = "position: absolute; left:" + rndWidth + "px; top:" + rndHeigth + "px; background-color:" + rndColor;

    if (startSomeNum == 1 && !isStartSome) {
        isStartSome = true;
        buttonId =uuidv4();
        btn.innerHTML = "START SOME";
        btn.setAttribute('onclick', 'startSome(this.id)');
        btn.setAttribute('id', buttonId);
    }
    else if (startSomeNum == 3 && isStartSome) {
        btn.innerHTML = "STOP SOME";
        btn.setAttribute('onclick', 'stopSome()');
    }
    else  {
        btn.innerHTML = "DO SOME";
        btn.setAttribute('onclick', 'doSome()');
    }

    document.body.appendChild(btn);

}

function stopSome() {
    debugger;
    document.body.style.background = '#ffffff';
    stopSome = false;
    startSome = false;
    document.getElementById(buttonId).removeAttribute('onclick');
    buttonId = '';
    if(intervalId){
        clearInterval(intervalId)
        intervalId = null;
    }
}

function startSome(event) {
    debugger;
    if(intervalId === null){
        intervalId = setInterval(() => {
            doSome();
            document.body.style.background = getRandomColor();
        }, 500)
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
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }