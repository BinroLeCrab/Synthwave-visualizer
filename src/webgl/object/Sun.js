import * as THREE from "three";

class Sun {
    constructor() { 
        this.geometry = new THREE.SphereGeometry(1, 24, 24);
        this.material = new THREE.MeshStandardMaterial({
            color: "#E6B130",
            fog: false
        });

        this.object = new THREE.Mesh(this.geometry, this.material);
        this.object.position.set(0, 0.3, -2);
    }
}
export default Sun;