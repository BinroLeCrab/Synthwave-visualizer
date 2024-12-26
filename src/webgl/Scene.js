import { useEffect } from "react";
import * as THREE from "three";
import { RGBShiftShader, ShaderPass } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { Light, Plane, Sun } from "./object";


class Scene {
    constructor() { }

    setup(canvas, playRef) {
        this.play = playRef;

        this.canvas = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.textureLoader = new THREE.TextureLoader();
        this.clock = new THREE.Clock();

        // instantier la logique three.js
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupPostprocessing();

        this.addObjects();
        this.addEvents();
    }

    addObjects() {
        
        this.planeFront = new Plane().object;
        this.scene.add(this.planeFront);

        this.planeBack = new Plane().object;
        this.planeBack.position.z = -1.8;
        this.scene.add(this.planeBack);

        this.sun = new Sun().object;
        
        this.scene.add(this.sun);
        console.log(this.sun.position);

        this.light = new Light().group;
        this.scene.add(this.light);
    }

    onResize = () => {
        // Update sizes
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // Update camera's aspect ratio and projection matrix
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        // Update renderer
        this.renderer.setSize(this.width, this.height);
        //Note: We set the pixel ratio of the renderer to at most 2
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    addEvents() {
        window.addEventListener("resize", this.onResize);
        this.tick();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        console.log("chargement de la scène");

        this.fog = new THREE.Fog("#F3CE78", 1, 2);
        this.scene.fog = this.fog;
        console.log("ajout du brouillard");
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            // Field of view
            75,
            // Aspect ratio
            this.width / this.height,
            // Near clipping plane
            0.01,
            // Far clipping plane
            20
        )

        this.camera.position.set(0, 0.1, 1.1);
        console.log("position de la caméra");
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
        })
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0xffffff, 0);


        this.renderer.render(this.scene, this.camera);
    }

    setupPostprocessing() {
        //! --- Post Processing
        // Add the effectComposer
        this.effectComposer = new EffectComposer(this.renderer);
        this.effectComposer.setSize(this.width, this.height);
        this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        /**
         * Add the render path to the composer
         * This pass will take care of rendering the final scene
         */
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.effectComposer.addPass(this.renderPass);
        console.log("ajout du rendu");

        /**
         * Add the rgbShift pass to the composer
         * This pass will be responsible for handling the rgbShift effect
         */
        this.rgbShiftPass = new ShaderPass(RGBShiftShader);
        this.rgbShiftPass.uniforms['amount'].value = 0.0008;

        this.effectComposer.addPass(this.rgbShiftPass);
        console.log("ajout du rgbShift");
    }

    tick = () => {

        this.elapsedTime = this.clock.getElapsedTime();

        // stats.begin();

        // Update controls
        // controls.update();

        this.sun.position.y = Math.sin(this.elapsedTime * 0.5) * 0.06 + 0.3;

        if (this.play.current) {
            this.planeFront.position.z = (this.elapsedTime * 0.15) % 2;
            this.planeBack.position.z = ((this.elapsedTime * 0.15) % 2) - 2;
        }
        // Update the renderer scene
        this.effectComposer.render();

        // Call tick again on the next frame
        window.requestAnimationFrame(this.tick);
    };
}

const scene = new Scene();
export default scene;