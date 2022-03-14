function Buttonki() {
    var tab = [];
    var bok = document.createElement("DIV");
    bok.style.width = 70 + "px";
    bok.style.height = 70 + "px";
    bok.style.position = "absolute";
    bok.style.backgroundColor = "blue";
    bok.innerHTML = "BOK";
    bok.style.textAlign = "Center";
    bok.style.fontFamily = "Comic Sans MS";
    bok.id = "bok"
    tab.push(bok);

    var top = document.createElement("DIV");
    top.style.width = 70 + "px";
    top.style.height = 70 + "px";
    top.style.position = "absolute";
    top.style.backgroundColor = "blue";
    top.innerHTML = "TOP";
    top.style.textAlign = "Center";
    top.style.fontFamily = "Comic Sans MS";
    top.id = "gora"
    tab.push(top);

    var left = document.createElement("DIV");
    left.style.width = 70 + "px";
    left.style.height = 70 + "px";
    left.style.position = "absolute";
    left.style.backgroundColor = "blue";
    left.innerHTML = "LEFT";
    left.style.textAlign = "Center";
    left.style.fontFamily = "Comic Sans MS";
    left.id = "czerwony"
    tab.push(left);

    var right = document.createElement("DIV");
    right.style.width = 70 + "px";
    right.style.height = 70 + "px";
    right.style.position = "absolute";
    right.style.backgroundColor = "blue";
    right.innerHTML = "RIGHT";
    right.style.textAlign = "Center";
    right.style.fontFamily = "Comic Sans MS";
    right.id = "niebieski"
    tab.push(right);

    this.getButtonki = function () {
        return tab;
    }
}