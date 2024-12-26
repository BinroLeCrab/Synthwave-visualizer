import { useRef, useEffect, useState } from "react";
import s from "./Visualiser.module.scss";
import audioVisualiser from "../../audioVisualiser/audioVisualiser";
const Visualiser = ({ play, audioRef }) => {

    const context = new AudioContext();

    const visualiserRef = useRef();
    const visualiserReversedRef = useRef();

    const playRef = useRef(play);

    useEffect(() => {
        if (context.state === 'suspended') {
            context.resume().then(() => {
                console.log('AudioContext resumed');
                // renderFrame();
            });
        }
    });

    useEffect(() => {
        const analyser = context.createAnalyser();
        const src = context.createMediaElementSource(audioRef.current);
        // src.connect(analyser);
        // analyser.connect(context.destination);

        const visualiser = new audioVisualiser(visualiserRef.current, playRef, context, src, analyser);
        const visualiserReversed = new audioVisualiser(visualiserReversedRef.current, playRef, context, src, analyser);

        console.log(src);
    }, [audioRef]);

    useEffect(() => {
        if (context.state === 'suspended') {
            context.resume().then(() => {
                console.log('AudioContext resumed');
                // renderFrame();
            });
        }
        playRef.current = play;
    }, [play]);

    useEffect(() => {
        console.log(audioRef.current);
        console.log(visualiserRef.current);
        console.log(visualiserReversedRef.current);
    }, [play]);

    return (
        <div className={s["Visualiser__container"]}>
            <canvas
                ref={visualiserRef}
                className={s["Visualiser__item"]}
            ></canvas>
            <canvas
                ref={visualiserReversedRef}
                className={`${s["Visualiser__item"]} ${s["Visualiser__item--reversed"]}`}
            ></canvas>
        </div>
    );
};

export default Visualiser;