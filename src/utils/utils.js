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