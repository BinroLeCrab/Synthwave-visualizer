import { useEffect, useState } from "react"
import Audio from "./components/Audio/Audio"
import Canvas from "./components/canvas/canvas"
import Start from "./components/Start/Start";

function App() {

  const [play, setPlay] = useState(false);

  const onSpacePress = (e) => {
    if (e.keyCode == 32) {
      setPlay(play ? false : true);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onSpacePress);

    return () => {
      window.removeEventListener("keydown", onSpacePress);
    }
  }, [play])



  return (
    <>
      <Start play={play}/>
      <Audio play={play} />
      <Canvas play={play} />
    </>
  )
}

export default App
