import { useEffect, useRef, useState } from "react";
import s from "./Audio.module.scss";

const Audio = ({ play, audioRef, muted }) => {

    const [first, setFirst] = useState(true);

    useEffect(() => {
        // audioRef.current.volume = 0;

        if (play === false) {
            if (first) {
                setFirst(false);
            } else {
                console.log('pause');
                audioRef.current.pause();
            }
        } else {
            console.log('play');
            audioRef.current.play();
        }
    }, [play]);

    return (
        <audio className={s.audio} ref={audioRef} controls loop muted={muted}>
            <source src="asset/audio/Nightcall.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default Audio;