import { useEffect, useState } from "react";
import s from "./Start.module.scss";

const Start = ({play}) => {

    const [style, setStyle] = useState(s["Start__container"]);

    useEffect(() => {
        console.log(play);
        setStyle(`${s["Start__container"]} ${play && s["Start__container--close"]}`);
    }, [play]);

    return (
        <div className={style}>
            <div className={s["Start__wrapper"]}>
                <img src="/asset/Space_Key.svg" alt="" />
                <p className={s["Start__text"]}>Press Space to start</p>
            </div>
        </div>
    );
};

export default Start;