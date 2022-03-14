/*
    klasa Game
*/

function Game(player, client, wzorzec) {

    /*
        zmienna prywatna widoczna tylko w tej funkcji (klasie)
    */

    var test = 10;

    /*
        zmienna publiczna, dostępna z innych klas/plików, nie używać
    */
    //this.test = 0; 

    /*
        funkcja prywatna widoczna tylko w tej funkcji (klasie)
    */
    var fov = 45;
    var proportions = 4 / 3;
    var minrendering = 0.1;
    var maxrendering = 10000;
    var bal1
    var bal2
    var camera = new THREE.PerspectiveCamera(
        fov, // kąt patrzenia kamery (FOV - field of view)
        proportions, // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        minrendering, // minimalna renderowana odległość
        maxrendering // maxymalna renderowana odległość
    );
    /*
    var geometry = new THREE.PlaneBufferGeometry(800, 800, 8, 8);
    var material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide, wireframe: true, color: 0x0000ff
    });
    var mesh = new THREE.Mesh(geometry, material);
    */
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();
    var geometry;
    var material;
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.y = 0;
    mesh.position.z = 400;
    mesh.position.x = 400;
    var plansza = wzorzec;


    var bombownia = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    var modelMixer;


    function init() {
        //console.log("wchodze do init");

        var wysokosc = window.innerHeight;
        var szerokosc = window.innerWidth;
        //window.addEventListener("load", function () { //nie moze byc listenera poniewaz ???
        //console.log("event listener");

        var axis = new THREE.AxisHelper(1000);
        scene.add(axis);


        renderer.setClearColor(0x000000);
        renderer.setSize(szerokosc, wysokosc);
        document.getElementById("main").appendChild(renderer.domElement);
        //Podloga

        /*
            var geometry;
            var material;
            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            mesh.position.y = 0;
            mesh.position.z = 400;
            mesh.position.x = 400;
           */
        console.log(plansza)

        for (var i = 1; i < plansza.length - 1; i++) {
            for (var j = 1; j < plansza.length - 1; j++) {
                //console.log("jestem w 2 forze")
                //if (plansza[i][j] == 0) {
                //console.log("if")
                var geometry4 = new THREE.BoxGeometry(100, 100, 10);
                var material4 = new THREE.MeshBasicMaterial({
                    side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('img/kafelka.png')
                });
                var mesh4 = new THREE.Mesh(geometry4, material4);
                scene.add(mesh4);
                mesh4.position.x = i * 100;
                mesh4.position.z = j * 100;
                mesh4.position.y = -50;
                mesh4.rotateX(Math.PI / 2);
                mesh4.userData = {
                    name: i + "_" + j
                }
                console.log(mesh4.userData.name);
                bombownia[i][j] = mesh4;
                //}
            }
        }

        camera.position.x = -950;
        camera.position.y = 400;
        camera.position.z = 350;
        camera.lookAt(mesh.position)

        var batony = new Buttonki();
        var buton = batony.getButtonki();
        console.log(buton[0]);
        for (var i = 0; i != 4; i++) {
            var przycisk = buton[i];
            przycisk.style.top = 30 + "px";
            przycisk.style.left = i * 100 + 500 + "px";
            document.body.appendChild(przycisk);
        }
        //})                                                                                                
    }




    console.log(plansza);
    var jumping = false;

    var meshforward = false;
    var meshback = false;
    var meshleft = false;
    var meshright = false;
    var Ogien = new Fire(scene);
    var ogienstworzony = false;

    var Flak;
    var ZdechPlayer2
    var ZdechPlayer
    function initbal() {
        scene.remove(bal1)
        scene.remove(bal2)

        var ZdechBalwan1 = new kap1();
        ZdechPlayer = ZdechBalwan1.create();
        var ZdechBalwan2 = new kap2();
        ZdechPlayer2 = ZdechBalwan2.create();

        bal1 = new bala1()
        bal1 = bal1.create()
        bal1.position.x = 0;
        bal1.position.y = 2;
        bal1.position.z = 100;
        scene.add(bal1)
        bal2 = new bala2()
        bal2 = bal2.create()
        bal2.position.x = 100;
        bal2.position.y = 2;
        bal2.position.z = 100;
        scene.add(bal2)

    }


    document.addEventListener("keydown", onKeyDown, false); // naciśnięcie dowolnego klawisza
    document.addEventListener("keyup", onKeyUp, false); //zwolnienie dowolnego klawisza

    function onKeyDown(event) {
        var keyCode = event.which;
        console.log(keyCode)
        if (keyCode == 65) { //lewo klawisz a
            meshleft = true;
        }
        if (keyCode == 68) { //prawo klawisz d
            meshright = true;
        }
        if (keyCode == 87) { //przod klawisz w
            meshforward = true;
        }
        if (keyCode == 83) { //tyl klawisz s
            meshback = true;
        }

    }
    function onKeyUp(event) {
        var keyCode = event.which;
        if (keyCode == 65) { //lewo klawisz a
            meshleft = false;
        }
        if (keyCode == 68) { //prawo klawisz d
            meshright = false;
        }
        if (keyCode == 87) { //przod klawisz w
            meshforward = false;
        }
        if (keyCode == 83) { //tyl klawisz s
            meshback = false;
        }
    }
    var licznik = 0;
    var liczenie = [
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

    document.body.addEventListener("keypress", function (e) {
        var KEY = e.key;
        switch (KEY.toUpperCase()) {
            case "F": checkposition(); 
                /*
                client.emit("akcjaplan", {
                    licznikupdate: licznik,
                    liczenieupdate: liczenie,


                })
               */
               break; 
        }
    }, false)
    var pierwszy = false;
    
    function checkposition() {
        //console.log(modelMesh.position.x);
        //console.log(modelMesh.position.z);
        if (player == 1) {

            var pozycjax = Math.floor(bal1.position.x);
            var pozycjaz = Math.floor(bal1.position.z);
            console.log(pozycjax);
            console.log(pozycjaz);
            console.log(liczenie);
            
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    if (pozycjax > (j * 100 + 69) && pozycjax < ((j + 1) * 100 + 69)) {
                        console.log("pierwszy if");
                        if (pozycjaz > (i * 100 + 69) && pozycjaz < ((i + 1) * 100 + 69)) {
                            console.log("jesteśmy na kafelce " + i + "_" + j); //j - czerwony / X     i - niebieski / Z
                            if (plansza[j][i] == 1 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/1.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 2 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/2.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 3 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/3.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 4 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/4.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 5 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/5.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 6 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/6.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 7 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/7.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 8 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/8.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 0 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/obramowanie.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 9) {
                                ogienstworzony = true;
                                var ognisko = Ogien.getFire();
                                scene.add(ognisko);
                                ognisko.position.x = pozycjax;
                                ognisko.position.z = pozycjaz;
                                scene.remove(bal1);
                                scene.add(ZdechPlayer);
                                ZdechPlayer.position.x = pozycjax;
                                ZdechPlayer.position.z = pozycjaz;
                                ZdechPlayer.position.y = 3;
                                console.log("Przegrales");
                                var koncowy = document.createElement("DIV");
                                koncowy.id = "koncowy";
                                koncowy.style.position = "absolute";
                                koncowy.style.left = 1 + "px";
                                koncowy.style.top = 1 + "px";
                                koncowy.style.width = window.innerWidth + "px";
                                koncowy.style.height = window.innerHeight + "px";
                                koncowy.style.backgroundColor = "red";
                                koncowy.style.opacity = "0.5";
                                koncowy.style.zIndex = 20;
                                document.body.appendChild(koncowy);
                            }
                        }
                    }
                }
            }
            if (pierwszy == false) {
                for (var i = 0; i < 10; i++) {
                    for (var j = 0; j < 10; j++) {
                        if (plansza[j][i] == 0) {
                            bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/obramowanie.png');
                            licznik++;
                            liczenie[j][i] = 1;
                            console.log(licznik);
                        }
                    }
                }
                pierwszy = true;
            }
            if (licznik == 91) {
                alert("GRATULACJE, WYGRAŁEŚ!")
            }
        }

        else {

            var pozycjax = Math.floor(bal2.position.x);
            var pozycjaz = Math.floor(bal2.position.z);
            console.log(pozycjax);
            console.log(pozycjaz);
            console.log(liczenie);
            
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    if (pozycjax > (j * 100 + 69) && pozycjax < ((j + 1) * 100 + 69)) {
                        console.log("pierwszy if");
                        if (pozycjaz > (i * 100 + 69) && pozycjaz < ((i + 1) * 100 + 69)) {
                            console.log("jesteśmy na kafelce " + i + "_" + j); //j - czerwony / X     i - niebieski / Z
                            if (plansza[j][i] == 1 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/1.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 2 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/2.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 3 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/3.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 4 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/4.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 5 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/5.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 6 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/6.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 7 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/7.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 8 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/8.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 0 && liczenie[j][i] == 0) {
                                bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/obramowanie.png');
                                licznik++;
                                console.log(licznik);
                                liczenie[j][i] = 1;
                                console.log("to nie bomba")
                            }
                            else if (plansza[j][i] == 9) {
                                ogienstworzony = true;
                                var ognisko = Ogien.getFire();
                                scene.add(ognisko);
                                ognisko.position.x = pozycjax;
                                ognisko.position.z = pozycjaz;
                                scene.remove(bal2);
                                scene.add(ZdechPlayer2);
                                ZdechPlayer2.position.x = pozycjax;
                                ZdechPlayer2.position.z = pozycjaz;
                                ZdechPlayer2.position.y = 3;
                                console.log("Przegrales");
                                var koncowy = document.createElement("DIV");
                                koncowy.id = "koncowy";
                                koncowy.style.position = "absolute";
                                koncowy.style.left = 1 + "px";
                                koncowy.style.top = 1 + "px";
                                koncowy.style.width = window.innerWidth + "px";
                                koncowy.style.height = window.innerHeight + "px";
                                koncowy.style.backgroundColor = "red";
                                koncowy.style.opacity = "0.5";
                                koncowy.style.zIndex = 20;
                                document.body.appendChild(koncowy);
                            }
                        }
                    }
                }
            }
            if (pierwszy == false) {
                for (var i = 0; i < 10; i++) {
                    for (var j = 0; j < 10; j++) {
                        if (plansza[j][i] == 0) {
                            bombownia[j + 1][i + 1].material.map = THREE.ImageUtils.loadTexture('img/obramowanie.png');
                            licznik++;
                            liczenie[j][i] = 1;
                            console.log(licznik);
                        }
                    }
                }
                pierwszy = true;
            }
            if (licznik == 91) {
                alert("GRATULACJE, WYGRAŁEŚ!")
            }
        }
    }





    function animateScene() {
        renderer.render(scene, camera);
        requestAnimationFrame(animateScene);
        if (ogienstworzony) {
            Ogien.updateFire();
        }
        if (player == 1) {

            if (meshleft) {
                bal1.rotation.y += Math.PI / 72;
            }
            if (meshright) {
                bal1.rotation.y -= Math.PI / 72;
            }
            if (meshforward) {
                bal1.translateZ(2);
            }
            if (meshback) {
                bal1.translateZ(-2);
            }

            //var delta = animation.clock.getDelta();
            //if (animation.needUpdate) {
            //    modelMixer.clipAction(animation.previous).stop();
            //    modelMixer.clipAction(animation.current).play();
            //    animation.needUpdate = false;
            //}
            //if (modelMixer) {
            //    modelMixer.update(delta)
            //}
            camera.updateProjectionMatrix();
            //console.log("animuje");

            client.emit("akcjabalwan", {
                //bal2x: bal2.position.x,
                //bal2y: bal2.position.y,
                //bal2z: bal2.position.z,
                balx: bal1.position.x,
                baly: bal1.position.y,
                balz: bal1.position.z,

            })
        }

        else {

            if (meshleft) {
                bal2.rotation.y += Math.PI / 72;
            }
            if (meshright) {
                bal2.rotation.y -= Math.PI / 72;
            }
            if (meshforward) {
                bal2.translateZ(2);
            }
            if (meshback) {
                bal2.translateZ(-2);
            }

            client.emit("akcjabalwan", {
                balx: bal2.position.x,
                baly: bal2.position.y,
                balz: bal2.position.z,

            })
            camera.updateProjectionMatrix();

        }






    }

    this.updatebal = function (balx, baly, balz) {
        if (player == 1) {

            
            
            bal2.position.x = balx
            bal2.position.y = baly
            bal2.position.z = balz
        }


        else {
            bal1.position.x = balx
            bal1.position.y = baly
            bal1.position.z = balz
            
        }
    }
    /*
    this.updateplansza = function (licznikupdate,liczenieupdate){
        if (player == 1) {
            licznik = licznikupdate
            liczenie = liczenieupdate
        }
        else {
            licznik = licznikupdate
            liczenie = liczenieupdate
        }
    }
   */
    this.setCamera = function (klick) {
        console.log("setCamera");
        var zmienna = klick;
        if (zmienna == "czerwony") {
            console.log("if1");
            camera.position.x = 350;
            camera.position.y = 400;
            camera.position.z = 1400;
            camera.lookAt(mesh.position);
            camera.updateProjectionMatrix();
        }
        else if (zmienna == "bok") {
            console.log("if2");
            camera.position.x = -950;
            camera.position.y = 400;
            camera.position.z = 350;
            camera.lookAt(mesh.position);
            camera.updateProjectionMatrix();
        }
        else if (zmienna == "niebieski") {
            console.log("if3");
            camera.position.x = 350;
            camera.position.y = 400;
            camera.position.z = -750;
            camera.lookAt(mesh.position);
            camera.updateProjectionMatrix();
        }
        else if (zmienna == "gora") {
            console.log("if4");
            camera.position.x = 400;
            camera.position.y = 1500;
            camera.position.z = 400;
            camera.lookAt(mesh.position);
            camera.updateProjectionMatrix();
        }
        else {
            console.log("whaaa")
        }
    }


    this.getTest = function () {
        return camera.position.z;
    }
    init();
    

    initbal();
    animateScene();
}
