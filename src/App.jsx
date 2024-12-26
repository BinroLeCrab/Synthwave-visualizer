import { useEffect, useRef, useState } from "react";
import Audio from "./components/Audio/Audio";
import Canvas from "./components/Canvas/Canvas";
import Gradient from "./components/Gradient/Gradient";
import Overlay from "./components/Overlay/Overlay";
import { toggleFullScreen } from "./utils/utils";
import Visualiser from "./components/Visualiser/Visualiser";

function App() {

  const [play, setPlay] = useState(false);
  const audioRef = useRef();

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
      <Visualiser play={play} audioRef={audioRef}/>
      <Overlay play={play} />
      <Audio play={play} audioRef={audioRef}/>
      <Canvas play={play} />
    </>
  )
}

export default App
