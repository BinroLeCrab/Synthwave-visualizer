import s from "./MusicInformation.module.scss";

const MusicInformation= ({play}) => {

    return (
        <div className={s["Music__container"]}>
            <img className={s["Music__cover"]} src="/asset/cover.webp" alt="" />
            <div className={s["Music__info"]}>
                <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
                <span className={s["Music__title"]}>Nightcall - Angèle, Kavinsky & Phoenix</span>
            </div>
        </div>
    );
};

export default MusicInformation;