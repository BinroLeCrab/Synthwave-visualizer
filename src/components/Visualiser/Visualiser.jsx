import { useRef, useEffect, useState } from "react";
import s from "./Visualiser.module.scss";
import audioVisualiser from "../../utils/audioVisualiser";
const Visualiser = ({ play, audioRef, hasClicked }) => {

    const visualiserRef = useRef();
    const visualiserReversedRef = useRef();

    const playRef = useRef(play);

    useEffect(() => {
        hasClicked && audioVisualiser.setup(visualiserRef.current, visualiserReversedRef.current, playRef, audioRef.current);
    }, [hasClicked]);

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