function Net() {
    ///*
    //    funkcja publiczna możliwa do uruchomienia 
    //    z innych klas
    //*/
    //this.sendData = function () {
    //    alert("wysyłam dane Ajaxem z klasy Net na serwer")
    //    $.ajax({
    //        url: "http://localhost:3000/index.html",
    //        data: { akcja: "dodaj_uzyt", imie: $("#nazwaUzytkownika").val() },
    //        type: "POST",
    //        success: function (data) {
    //            console.log(data);
               
    //            if (data == "Dodano użytkownika, czekaj na drugiego gracza.") {
    //                console.log("ga");
    //                game.gra();
    //                net.czekaj();
    //                ui.oczekiwanieGra(data, true, false);

    //            }
    //            else {
    //                game.gra();
    //                ui.oczekiwanieGra(data, true, true);
    //            }

    //        },
    //        error: function (xhr, status, error) {
    //            console.log('Error: ' + error.message);
    //        },
    //    });

    //}
    //this.usun = function () {
    //    alert("usuwam dane")
    //    $.ajax({
    //        url: "http://localhost:3000/index.html",
    //        data: { akcja: "usun_uzyt", },
    //        type: "POST",
    //        success: function (data) {
    //            ui.oczekiwanieGra(data);
    //        },
    //        error: function (xhr, status, error) {
    //            console.log('Error: ' + error.message);
    //        },
    //    });
    //}
    //this.czekaj = function () {
    //    $.ajax({
    //        url: "http://localhost:3000/index.html",
    //        data: { akcja: "czekaj_uzyt", },
    //        type: "POST",
    //        success: function (data) {
    //            if (data == "Przygotuj się do gry") {
    //                ui.oczekiwanieGra(data, true, true);
    //                setTimeout(function () {
    //                    $("#oczekiwanie").style.display = "none";
    //                }, 15000);
    //            }
    //            else {
    //                var z = setTimeout(net.czekaj(), 15000);
    //            }

    //        },
    //        error: function (xhr, status, error) {
    //            console.log('Error: ' + error.message);
    //        },
    //    });
    //}
}