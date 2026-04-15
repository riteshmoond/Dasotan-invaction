import { useRef, useState, useEffect } from 'react';
import invitationSong from '../assets/WhatsApp Audio 2026-04-15 at 1.47.09 PM.mp3';

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

  // Auto-play on mount
  useEffect(() => {
    // Try to play music automatically
    if (audioRef.current) {
      audioRef.current.volume = 0.55;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    }
    // eslint-disable-next-line
  }, []);

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
