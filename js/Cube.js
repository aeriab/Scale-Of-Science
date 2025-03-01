import * as THREE from 'three';

export default class Cube {
    constructor(scene) {
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.mesh);
    }

    update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}