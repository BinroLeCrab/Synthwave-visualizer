import { useEffect, useRef, useState } from "react";
import s from "./Audio.module.scss";

const Audio = ({ play }) => {

    const audioRef = useRef();
    const [first, setFirst] = useState(true);

    useEffect(() => {

        if (play === false) {
            if (first) {
                setFirst(false);
            } else {
                console.log('pause');
                audioRef.current.pause();
            }
        } else {
            // if (context.state === 'suspended') {
            //     context.resume().then(() => {
            //         console.log('AudioContext resumed');
            //         // renderFrame();
            //     });
            // }
            console.log('play');
            audioRef.current.play();
        }
    }, [play]);

    return (
        <audio className={s.audio} ref={audioRef} controls loop>
            <source src="asset/audio/Nightcall.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default Audio;