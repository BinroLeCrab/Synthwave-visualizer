import { useRef, useEffect, useState } from "react";
import s from "./Visualiser.module.scss";
import audioVisualiser from "../../utils/audioVisualiser";
const Visualiser = ({ play, audioRef }) => {

    const visualiserRef = useRef();
    const visualiserReversedRef = useRef();

    const playRef = useRef(play);

    useEffect(() => {
        audioVisualiser.setup(visualiserRef.current, visualiserReversedRef.current, playRef, audioRef.current);
    }, []);

    useEffect(() => {
        playRef.current = play;
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