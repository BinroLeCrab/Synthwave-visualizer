import { useEffect, useState } from "react";
import Audio from "./components/Audio/Audio";
import Canvas from "./components/Canvas/Canvas";
import Gradient from "./components/Gradient/Gradient";
import Overlay from "./components/Overlay/Overlay";
import { toggleFullScreen } from "./utils/utils";

function App() {

  const [play, setPlay] = useState(false);

  const onSpacePress = (e) => {
    if (e.keyCode == 32) {
      setPlay(play ? false : true);
    }
  }

  document.addEventListener(
    "keydown", (e) => {
      if (e.keyCode == 70 || e.keyCode == 27) {
        toggleFullScreen(e.keyCode);
      }
    },
  );

  useEffect(() => {
    window.addEventListener('keydown', onSpacePress);

    return () => {
      window.removeEventListener("keydown", onSpacePress);
    }
  }, [play])



  return (
    <>
      <Gradient />
      <Overlay play={play} />
      <Audio play={play} />
      <Canvas play={play} />
    </>
  )
}

export default App
