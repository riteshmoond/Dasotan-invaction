import { useRef, useState } from 'react';
import invitationSong from '../assets/lyrium-2025-ki-instrumental-classic-460193.mp3';

function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.55;
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
      return;
    }

    playMusic();
  };

  return (
    <>
      <audio ref={audioRef} src={invitationSong} loop preload="auto" />
      <button className="music-button" type="button" onClick={toggleMusic}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </>
  );
}

export default MusicButton;
