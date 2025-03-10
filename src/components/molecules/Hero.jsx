import { useState } from 'react';
import HeroScreen from '/src/components/atoms/HeroScreen';
import MuteButton from '/src/components/atoms/MuteButton';

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    return (
        <>
            <HeroScreen isMuted={isMuted} />
            <MuteButton isMuted={isMuted} toggleMute={toggleMute} />
        </>
    );
};

export default Hero;