import s from "./MutedBtn.module.scss";

const MutedBtn = ({ muted, onClick }) => {

    const handleClick = (e) => {
        onClick(!muted);
        // e.target.blur(); // Retire le focus du bouton
        document.activeElement.blur();
    };

    return (
        <button
            className={s["Muted-button__container"]}
            onClick={(e) => handleClick(e)}
            title={muted ? "Unmute" : "Mute"}
        >
            {muted ? <img className={s["Muted-button__image"]} src="/asset/Mute.svg" alt="" />
                : <img className={s["Muted-button__image"]} src="/asset/Sound.svg" alt="" />}
        </button>
    );
};

export default MutedBtn;