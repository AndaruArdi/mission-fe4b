import React, { useRef, useState } from 'react';
import '/src/stylesberanda.css';    
import video from '/src/assets/squid.mp4';
import muteIcon from '/src/assets/mute.png';
import unmuteIcon from '/src/assets/unmute.png'; 
const Hero = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <video ref={videoRef} autoPlay muted={isMuted} loop id="hero-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="hero-screen"></div>
            <div className="hero-text">
                <h1>Squid Game</h1>
                <p>Ratusan pemain yang kekurangan uang menerima undangan aneh untuk bersaing dalam permainan anak-anak. Di dalam, hadiah yang menggoda menunggu dengan taruhan tinggi yang mematikan: game bertahan hidup yang memiliki hadiah 45,6 miliar won yang dipertaruhkan.</p>
                <div className="button-hero"> 
                    <button className="hero-button">Mulai</button>
                    <button className="hero-more">ⓘ Selengkapnya</button> 
                    <p className="umur"> 18+</p>
                    <span className="mute-container" onClick={toggleMute}>
                        <img className="mute-button" src={isMuted ? muteIcon : unmuteIcon} alt={isMuted ? "Mute" : "Unmute"} />
                    </span>
                </div> 
            </div>
        </section>
    );
};

export default Hero;