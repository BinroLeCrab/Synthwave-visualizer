import { puissanceOfTwo } from "./utils";

const test = "test";

class AudioVisualiser {
    constructor() {}

    setup(canvas, canvasReversed, playRef, audio) {

        console.log(test);

        this.play = playRef;
        this.canvas = canvas;
        this.canvasReversed = canvasReversed;
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        this.canvasReversed.width = window.innerWidth / 2;
        this.canvasReversed.height = window.innerHeight;

        this.ctxC = this.canvas.getContext("2d");
        this.ctxR = this.canvasReversed.getContext("2d");

        this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        this.audioSource = this.ctx.createMediaElementSource(audio);

        this.analyserNode = new AnalyserNode(this.ctx, {
            fftSize: puissanceOfTwo(window.innerWidth / 3)
        });

        this.bufferLength = this.analyserNode.frequencyBinCount;

        this.dataArray = new Uint8Array(this.bufferLength);

        this.audioSource.connect(this.analyserNode);
        this.audioSource.connect(this.ctx.destination);

        this.WIDTH = this.canvas.width;
        this.HEIGHT = this.canvas.height;

        this.barWidth = (this.WIDTH / this.bufferLength) * 2.5;
        this.barHeight;

        this.renderFrame();
    }

    renderFrame = () => {
        this.analyserNode.getByteFrequencyData(this.dataArray);


        this.x = 0;

        // Effacer le canvas pour avoir un fond transparent
        this.ctxC.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctxR.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        for (var i = 0; i < this.bufferLength; i++) {

            if (!this.play.current) {
                this.barHeight = ((this.dataArray[i] * (window.innerHeight * 0.4)) / 255) + (window.innerHeight * 0.4);
            } else {
                this.barHeight = ((this.dataArray[i] * (window.innerHeight * 0.4)) / 255) + (window.innerHeight * 0.4);
            }

            this.ctxC.fillStyle = `rgba(65, 134, 219, ${this.dataArray[i] / 255})`;
            this.ctxR.fillStyle = `rgba(65, 134, 219, ${this.dataArray[i] / 255})`;
            this.ctxC.fillRect(this.x, this.HEIGHT - this.barHeight, this.barWidth, this.barHeight);
            this.ctxR.fillRect(this.x, this.HEIGHT - this.barHeight, this.barWidth, this.barHeight);

            this.x += this.barWidth + 1;
        }
        window.requestAnimationFrame(this.renderFrame);
    }
}
const audioVisualiser = new AudioVisualiser();
export default audioVisualiser;