/*
    UI - obsługa interfejsu użytkownika
*/
function Ui() {
    document.getElementById("bok").addEventListener("click", function () {
        var klick = this.id;
        console.log(klick);
        game.setCamera(klick);
    })
    document.getElementById("gora").addEventListener("click", function () {
        var klick = this.id;
        game.setCamera(klick);
    })
    document.getElementById("czerwony").addEventListener("click", function () {
        var klick = this.id;
        game.setCamera(klick);
    })
    document.getElementById("niebieski").addEventListener("click", function () {
        var klick = this.id;
        game.setCamera(klick);
    }) 


}