var bala1 = function () {

    var obj = new THREE.Object3D()
    function init() {
        var kologeo = new THREE.SphereBufferGeometry(15, 32, 32);;
        var kologeo2 = new THREE.SphereGeometry(20, 32, 32);
        var kologeo3 = new THREE.SphereGeometry(30, 32, 32);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff, side: THREE.DoubleSide,
        });
        var dach = new THREE.CylinderGeometry(15, 15, 2, 18);
        var material3 = new THREE.MeshBasicMaterial({
            color: 0xff00f0, side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(dach, material3)
        mesh.position.x = 0
        mesh.position.y = 80
        mesh.position.z = 0
        obj.add(mesh)


        var gora = new THREE.CylinderGeometry(10, 10, 20, 18);

        var mesh2 = new THREE.Mesh(gora, material3)
        mesh2.position.x = 0
        mesh2.position.y = 80
        mesh2.position.z = 0
        obj.add(mesh2)

        //nos
        var conegeometry = new THREE.ConeBufferGeometry(5, 20, 32);
        var conematerial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var cone = new THREE.Mesh(conegeometry, conematerial);
        cone.position.x = 0;
        cone.position.y = 60;
        cone.position.z = 22;
        cone.rotateX(Math.PI / 2);
        obj.add(cone);


        kula = new THREE.Mesh(kologeo, material)
        kula.position.x = 0

        kula.position.z = 0
        kula.rotateX(Math.PI / 2)
        kula.rotateZ(Math.PI / 2)
        kula.position.y = 65
        obj.add(kula)
        kula2 = new THREE.Mesh(kologeo2, material)
        kula2.position.x = 0
        kula2.position.y = 40
        kula2.position.z = 0
        kula2.rotateX(Math.PI / 2)
        kula2.rotateZ(Math.PI / 2)

        obj.add(kula2)
        kula3 = new THREE.Mesh(kologeo3, material)
        kula3.position.x = 0
        kula3.position.y = 0
        kula3.position.z = 0
        kula3.rotateX(Math.PI / 2)
        kula3.rotateZ(Math.PI / 2)

        obj.add(kula3)

    }
    init()
    this.create = function () {
        return obj
    }
}

var bala2 = function () {

    var obj2 = new THREE.Object3D()
    function init() {
        var kologeo = new THREE.SphereBufferGeometry(15, 32, 32);;
        var kologeo2 = new THREE.SphereGeometry(20, 32, 32);
        var kologeo3 = new THREE.SphereGeometry(30, 32, 32);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff, side: THREE.DoubleSide,
        });
        var dach = new THREE.CylinderGeometry(15, 15, 2, 18);
        var material2 = new THREE.MeshBasicMaterial({
            color: 0x0000ff, side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(dach, material2)
        mesh.position.x = 0
        mesh.position.y = 80
        mesh.position.z = 0
        obj2.add(mesh)


        var gora = new THREE.CylinderGeometry(10, 10, 20, 18);

        var mesh2 = new THREE.Mesh(gora, material2)
        mesh2.position.x = 0
        mesh2.position.y = 80
        mesh2.position.z = 0
        obj2.add(mesh2)

        //nos
        var conegeometry = new THREE.ConeBufferGeometry(5, 20, 32);
        var conematerial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var cone = new THREE.Mesh(conegeometry, conematerial);
        cone.position.x = 0;
        cone.position.y = 60;
        cone.position.z = 22;
        cone.rotateX(Math.PI / 2);
        obj2.add(cone);


        kula = new THREE.Mesh(kologeo, material)
        kula.position.x = 0

        kula.position.z = 0
        kula.rotateX(Math.PI / 2)
        kula.rotateZ(Math.PI / 2)
        kula.position.y = 65
        obj2.add(kula)
        kula2 = new THREE.Mesh(kologeo2, material)
        kula2.position.x = 0
        kula2.position.y = 40
        kula2.position.z = 0
        kula2.rotateX(Math.PI / 2)
        kula2.rotateZ(Math.PI / 2)

        obj2.add(kula2)
        kula3 = new THREE.Mesh(kologeo3, material)
        kula3.position.x = 0
        kula3.position.y = 0
        kula3.position.z = 0
        kula3.rotateX(Math.PI / 2)
        kula3.rotateZ(Math.PI / 2)

        obj2.add(kula3)

    }
    init()
    this.create = function () {
        return obj2
    }
}