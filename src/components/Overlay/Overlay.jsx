import MusicInformation from "../MusicInformation/MusicInformation";
import MutedBtn from "../MutedBtn/MutedBtn";
import Start from "../Start/Start";
import s from "./Overlay.module.scss";

const Overlay= ({play, muted, setMuted}) => {

    return (
        <div className={s["Overlay__container"]}>
            <MusicInformation play={play} muted={muted} />
            <Start play={play} />
            <MutedBtn muted={muted} onClick={setMuted} />
        </div>
    );
};

export default Overlay;