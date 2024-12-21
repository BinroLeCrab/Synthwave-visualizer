import * as THREE from "three";

class Scene {
    constructor() { }

    setup(canvas) {
        this.canvas = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // instantier la logique three.js
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();

        this.addEvents();
        this.addObjects();
    }

    addObjects() {

    }

    onResize = () => {
        
    };

    addEvents() {
        
    }

    setupScene() {
        this.scene = new THREE.Scene();
    }

    setupCamera() {
        
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: false,
        });

        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    tick = (time, deltaTime, frame) => {
        
    };
}

const scene = new Scene();
export default scene;