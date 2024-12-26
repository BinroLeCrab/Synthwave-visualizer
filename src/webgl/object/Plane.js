import * as THREE from "three";

class Plane {
    constructor() {

        this.textureLoader = new THREE.TextureLoader();
        this.TEXTURE_PATH = "/asset/grid.png";
        this.DISPLACEMENT_PATH = "/asset/displacement.png";

        // Load a texture from a given path using the texture loader
        // this.gridTexture = this.textureLoader.load(this.TEXTURE_PATH, (texture) => { console.log("fin chargement de la texture"); return texture }, (xhr) => { console.log(xhr.loaded / xhr.total * 100 + '% loaded') }, (error) => { console.log('An error happened') });
        // this.terrainTexture = this.textureLoader.load(this.DISPLACEMENT_PATH, (texture) => { console.log("fin chargement du terrain"); return texture }, (xhr) => { console.log(xhr.loaded / xhr.total * 100 + '% loaded') }, (error) => { console.log('An error happened') });
        this.gridTexture = this.textureLoader.load(this.TEXTURE_PATH);
        this.terrainTexture = this.textureLoader.load(this.DISPLACEMENT_PATH);

        //? Plane
        this.geometry = new THREE.PlaneGeometry(1, 2, 24, 24);

        this.material = new THREE.MeshStandardMaterial({
            map: this.gridTexture,
            color: "#ff61cf",
            displacementMap: this.terrainTexture,
            displacementScale: 0.4,
        });

        this.object = new THREE.Mesh(this.geometry, this.material);

        this.object.rotation.x = -Math.PI * 0.5;
        this.object.position.z = 0.15;
    }
}
export default Plane;