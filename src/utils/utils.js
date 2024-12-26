export const toggleFullScreen = (keyCode) => {
    if (keyCode == 70) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    } else if (keyCode == 27) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

export const puissanceOfTwo = (n) => {
    let i = 1;
    let calcul = 2;
    let result = 0;
    while (calcul < n) {
        result = calcul;
        calcul = Math.pow(2, i);
        i++;
    }
    return result;
}