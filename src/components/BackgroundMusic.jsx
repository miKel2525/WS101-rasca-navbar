import React, { useRef, useState } from 'react';
import backgroundMusic from '../assets/audio/background.mp3'; // Adjust the path if necessary

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // Start with music paused

    const toggleMusic = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div>
            <audio ref={audioRef} src={backgroundMusic} loop />
            <button onClick={toggleMusic}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
};

export default BackgroundMusic;
