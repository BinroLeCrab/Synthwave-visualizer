import * as THREE from "three";

class Light {
    constructor() {
        this.group = new THREE.Group();

        //? Light
        this.ambientLight = new THREE.AmbientLight("#ffffff", 100);
        this.group.add(this.ambientLight);

        // Right Spotlight aiming to the left
        this.spotlight = new THREE.SpotLight('#ff9900', 30, 25, Math.PI * 0.1, 0.25);
        this.spotlight.position.set(0.5, 0.75, 2.2);
        // Target the spotlight to a specific point to the left of the scene
        this.spotlight.target.position.x = -0.25;
        this.spotlight.target.position.y = 0.25;
        this.spotlight.target.position.z = 0.25;
        this.group.add(this.spotlight);
        this.group.add(this.spotlight.target);

        // Left Spotlight aiming to the right
        this.spotlight2 = new THREE.SpotLight('#ff9900', 30, 25, Math.PI * 0.1, 0.25);
        this.spotlight2.position.set(-0.5, 0.75, 2.2);
        // Target the spotlight to a specific point to the right side of the scene
        this.spotlight2.target.position.x = 0.25;
        this.spotlight2.target.position.y = 0.25;
        this.spotlight2.target.position.z = 0.25;
        this.group.add(this.spotlight2);
        this.group.add(this.spotlight2.target);
    }
}

export default Light;