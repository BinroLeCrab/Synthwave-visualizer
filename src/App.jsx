import { useEffect, useState } from "react"
import Audio from "./components/Audio/Audio"
import Canvas from "./components/canvas/canvas"

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
      <Audio play={play} />
      <Canvas play={play}/>
    </>
  )
}

export default App
