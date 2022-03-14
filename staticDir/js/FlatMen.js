var kap1 = function () {

    var obj = new THREE.Object3D()
    function init() {

        var dach = new THREE.CylinderGeometry(15, 15, 2, 18);
        var material3 = new THREE.MeshBasicMaterial({
            color: 0xff00f0, side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(dach, material3)
        mesh.position.x = 0
        mesh.position.y = 0
        mesh.position.z = 0
        obj.add(mesh)


        var gora = new THREE.CylinderGeometry(10, 10, 20, 18);

        var mesh2 = new THREE.Mesh(gora, material3)
        mesh2.position.x = 0
        mesh2.position.y = 8
        mesh2.position.z = 0
        obj.add(mesh2)



    }
    init()
    this.create = function () {
        return obj
    }
}
var kap2 = function () {

    var obj2 = new THREE.Object3D()
    function init() {

        var dach = new THREE.CylinderGeometry(15, 15, 2, 18);
        var material2 = new THREE.MeshBasicMaterial({
            color: 0x0000ff, side: THREE.DoubleSide,
        });
        var mesh = new THREE.Mesh(dach, material2)
        mesh.position.x = 100
        mesh.position.y = 0
        mesh.position.z = 0
        obj2.add(mesh)


        var gora = new THREE.CylinderGeometry(10, 10, 20, 18);

        var mesh2 = new THREE.Mesh(gora, material2)
        mesh2.position.x = 100
        mesh2.position.y = 8
        mesh2.position.z = 0
        obj2.add(mesh2)





    }
    init()
    this.create = function () {
        return obj2
    }
}
