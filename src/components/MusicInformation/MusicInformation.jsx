import s from "./MusicInformation.module.scss";

const MusicInformation= ({play, muted}) => {

    return (
        <div className={s["Music__container"]}>
            <div className={s["Music__cover"]}>
                {(play && !muted) ? <img src="/asset/MusicOn.svg" alt="" /> : (play && muted) ? <img src="/asset/Mute.svg" alt="" /> :""}
            </div>
            {/* <img className={s["Music__cover"]} src="/asset/cover.webp" alt="" /> */}
            <div className={s["Music__info"]}>
                    <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
                    <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
                    <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
                    <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
            </div>
        </div>
    );
};

export default MusicInformation;