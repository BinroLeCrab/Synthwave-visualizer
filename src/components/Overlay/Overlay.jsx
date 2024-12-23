import MusicInformation from "../MusicInformation/MusicInformation";
import Start from "../Start/Start";
import s from "./Overlay.module.scss";

const Overlay= ({play}) => {

    return (
        <div className={s["Overlay__container"]}>
            <MusicInformation play={play} />
            <Start play={play} />
        </div>
    );
};

export default Overlay;