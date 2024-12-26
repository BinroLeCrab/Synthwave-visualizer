import { puissanceOfTwo } from "../utils/utils";

class audioVisualiser {
    constructor(canvas, playRef, context, src, analyser) {
        this.play = playRef;

        this.canvas = canvas;
        this.analyser = analyser;
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");

        src.connect(this.analyser);
        this.analyser.connect(context.destination);

        this.heigthBar = window.innerWidth / 3;

        this.analyser.fftSize = puissanceOfTwo(this.heigthBar);

        this.bufferLength = this.analyser.frequencyBinCount;
        // console.log(this.bufferLength);

        this.dataArray = new Uint8Array(this.bufferLength);

        this.WIDTH = this.canvas.width;
        this.HEIGHT = this.canvas.height;

        this.barWidth = (this.WIDTH / this.bufferLength) * 2.5;
        this.barHeight;

        this.renderFrame();
    }

    renderFrame = () => {
        this.x = 0;

        this.analyser.getByteFrequencyData(this.dataArray);

        // Effacer le canvas pour avoir un fond transparent
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        for (var i = 0; i < this.bufferLength; i++) {

            if (!this.play.current) {
                this.barHeight = ((this.dataArray[i] * (window.innerHeight * 0.4)) / 255) + (window.innerHeight * 0.4);
            } else {
                this.barHeight = ((this.dataArray[i] * (window.innerHeight * 0.4)) / 255) + (window.innerHeight * 0.4);
            }

            this.ctx.fillStyle = `rgba(65, 134, 219, ${this.dataArray[i] / 255})`;
            this.ctx.fillRect(this.x, this.HEIGHT - this.barHeight, this.barWidth, this.barHeight);

            this.x += this.barWidth + 1;
        }
        window.requestAnimationFrame(this.renderFrame);
    }
}

export default audioVisualiser;