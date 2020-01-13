function doSome() {
    let height = window.screen.height * 0.75;
    let width = window.screen.width* 0.91;

    let rndHeigth = getRndInteger(0, height);
    let rndWidth = getRndInteger(0, width);
    let rndColor = getRandomColor();

    var btn = document.createElement("Button");
    btn.innerHTML = "DO SOME";
    btn.className = "btn btn-success btn-lg";
    btn.style = "position: absolute; left:" + rndWidth + "px; top:" + rndHeigth + "px; background-color:" + rndColor;
    btn.setAttribute('onclick', 'doSome()');
    document.body.appendChild(btn);

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