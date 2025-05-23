import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router';
import '/src/stylesberanda.css';
import Profile from '/src/assets/pp.png';
import useWatchlistStore from "/src/store/store";

const ProfileNav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const resetWatchlist = useWatchlistStore((state) => state.resetWatchlist); 

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userId'); 
        localStorage.removeItem('username'); 
        resetWatchlist(); // 
        navigate('/');
    };

    return (
        <div className="profile-container" onClick={toggleDropdown}>
            <img className="profile" src={Profile} alt="profile-pct" />
            <span className="arrow">&#9662;</span>

            {isDropdownOpen && (
                <div className="profile-dropdown">
                    <Link to="/profile" className="dropdown-item">Profil Saya</Link>
                    <Link to="/premium" className="dropdown-item">Subscription</Link>
                    <Link to="/" button onClick={handleLogout} className="dropdown-item">Keluar</Link> 
                </div>
            )}
        </div>
    );
};

export default ProfileNav;
