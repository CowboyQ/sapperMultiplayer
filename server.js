var http = require("http");
var fs = require("fs");
var url = require('url');
var qs = require("querystring");
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var Operations = require("./modules/Operations.js");
var db;
var opers = new Operations();
var server = http.createServer(function (request, response) {
    console.log("żądany przez przeglądarkę adres: " + request.url)
    switch (request.method) {
        case "GET":
            if (request.url === "/index.html") {
                fs.readFile("staticDir/index.html", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/Game.js") {
                fs.readFile("staticDir/js/Game.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/Butonki.js") {
                fs.readFile("staticDir/js/Butonki.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/Fire.js") {
                fs.readFile("staticDir/js/Fire.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/FlatMen.js") {
                fs.readFile("staticDir/js/FlatMen.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
                 
            if (request.url === "/js/Net.js") {
                fs.readFile("staticDir/js/Net.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/UI.js") {
                fs.readFile("staticDir/js/UI.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/libs/three.js") {
                    fs.readFile("staticDir/libs/three.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
            }                                
            if (request.url === "/img/kafelka.png") {
                fs.readFile("staticDir/img/kafelka.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/bomb.png") {
                fs.readFile("staticDir/img/bomb.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/1.png") {
                fs.readFile("staticDir/img/1.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/2.png") {
                fs.readFile("staticDir/img/2.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/3.png") {
                fs.readFile("staticDir/img/3.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/4.png") {
                fs.readFile("staticDir/img/4.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/5.png") {
                fs.readFile("staticDir/img/5.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/6.png") {
                fs.readFile("staticDir/img/6.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/7.png") {
                fs.readFile("staticDir/img/7.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/img/8.png") {
                fs.readFile("staticDir/img/8.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' }); //zamienić na image coś znaleźć na specu pomocy
                    response.write(data);
                    response.end();
                })
            }
            if (request.url === "/js/SnowMen.js") {
                fs.readFile("staticDir/js/SnowMen.js", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }

            break;

    }
})
server.listen(3000);
var socketio = require("socket.io")
var io = socketio.listen(server)
var clientcount = 0
var db2
var obj =
    {
        login: "",
        password: "",

    };
var wzorzec = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var tab_liczenia =[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],          
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
function tworzenietablicy() {           
    console.log("function bomby");
    var stala = 10;
    for (var i = 0; i < stala; i++) {
        var los1 = Math.floor((Math.random() * 9) + 1);
        var los2 = Math.floor((Math.random() * 9) + 1);
        if (wzorzec[los1][los2] == 0) {
            console.log("wchodze do ifa");
            wzorzec[los1][los2] = 9;
            console.log("Bomba na kafelce: " + los2 + " _ " + los1);
        }
        else {
            i--;
        }
    }
    console.log("function cyferki");
    for (var i = 1; i < wzorzec.length - 1; i++) {
        for (var j = 1; j < wzorzec.length - 1; j++) {
            if (wzorzec[i][j] != 9) {
                if (wzorzec[i - 1][j - 1] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i][j - 1] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i + 1][j - 1] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i - 1][j] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i][j] == 9) {
                    console.log("bomba");
                    //console.log(bombownia[i][j].name);
                }
                if (wzorzec[i + 1][j] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i - 1][j + 1] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i][j + 1] == 9) {
                    wzorzec[i][j]++;
                }
                if (wzorzec[i + 1][j + 1] == 9) {
                    wzorzec[i][j]++;
                }
                else {
                    console.log("nuthin");
                }
            }
        }
    }        
}
tworzenietablicy();
console.log(wzorzec);
mongoClient.connect("mongodb://localhost/test", function (err, db) {
    if (err) console.log(err)
    else console.log("mongo podłączone")
    db.createCollection("maj", function (err, coll) { })
    db2 = db
    //tu można operować na utworzonej bazie danych db lub podstawić jej obiekt 
    // pod zmienną widoczną na zewnątrz    
})
io.sockets.on("connection", function (client) {
    console.log("klient sie podłączył" + client.id)


    clientcount++
    if (clientcount > 2) {
        clientcount = 1
    }                    
    client.emit("onconnect", {
        ilosc: clientcount,
        tablica: wzorzec
    }) 
    //client.on("positiondata", function (data) {
    //    client.broadcast.emit("angle", { angle: data.angle, theta: data.theta, theta2: data.theta2 });
    //})
    client.on("akcjabalwan", function (data) {
        client.broadcast.emit("akcjabalwan", { balx: data.balx, baly: data.baly, balz: data.balz});
    })
    /*
    client.emit("akcjaplan", {
        
        tablica: wzorzec
    }) 
    client.on("akcjaplan", function (data) {
        client.broadcast.emit("akcjaplan", { licznikupdate: data.licznik, liczenieupdate: data.liczenie});

    })
  */
  
  
    client.on("rejestracja", function (data) {
          var coll = db2.collection("maj")
          console.log("emit to " + data)
          opers.Insert(coll, data)
          io.sockets.to(client.id).emit("rejestracja", {
              status: "zarejestrowany",
              login: data.login,
              password: data.password,
              id: data._id,
          });
    })
    client.on("disconnect", function () {
          console.log("klient się rozłącza")
    })


})
console.log("start serwera");