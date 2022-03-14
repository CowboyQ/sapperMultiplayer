function Fire(scene) {
    var container = new THREE.Object3D();
    var firetab = []
    function firegen() {
        var material = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 1,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        for (var i = 0; i < 200; i++) {
            var randsize = Math.floor((Math.random() * 20))
            var geometry = new THREE.BoxGeometry(randsize, randsize, randsize, 1, 1, 1)
            var particle = new THREE.Mesh(geometry, material.clone())
            particle.position.x = Math.floor((Math.random() * 40));
            particle.position.y = Math.floor((Math.random() * 200));
            particle.position.z = Math.floor((Math.random() * 45));
            firetab[i] = particle
            container.add(particle)
        }
    }
    firegen()
    this.getFire = function () {
        return container
    }
    this.updateFire = function () {
        for (var i = 0; i < firetab.length; i++) {
            firetab[i].position.y += 1;
            firetab[i].material.opacity -= 0.01
            if (firetab[i].position.y == 220) {
                firetab[i].position.y = Math.floor((Math.random() * 10));
                firetab[i].material.opacity = 1
            }
        }
    }
}