
import Sidebar from './components/Sidebar.jsx'
import Player from './components/Player.jsx'
import Display from './components/Display.jsx'
import { useContext } from 'react'
import { PlayerContext } from './components/context/PlayerContext.jsx'
import { songsData } from './assets/assets.js'

const App = () => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>{
        songsData.length!==0
        ?<>
        <Sidebar/>
        <Display/>
      
      <Player/>
      
        </>:null}
        <audio ref={audioRef} src={track?track.file:"".file} preload='auto'></audio>
    </div>
  </div>
  )
}

export default App
