import s from "./Canvas.module.scss";
import scene from "../../webgl/Scene";
import { useEffect, useRef } from "react";

const Canvas = ({play}) => {
    const canvasRef = useRef();
    const playRef = useRef(play);

    useEffect(() => {
        scene.setup(canvasRef.current, playRef);
    }, []);

    useEffect(() => {
        playRef.current = play;
    }, [play]);

    return <canvas className={s["webgl"]} ref={canvasRef}></canvas>;
};

export default Canvas;