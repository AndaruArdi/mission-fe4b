import React, { useState } from 'react'; 
import '/src/stylesberanda.css';
import { Link } from 'react-router';
import Profile from '/src/assets/pp.png';

const ProfileNav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="profile-container" onClick={toggleDropdown}>
            <img className="profile" src={Profile} alt="profile-pct" />
            <span className="arrow">&#9662;</span>

            {isDropdownOpen && (
                <div className="profile-dropdown">
                    <Link to="/profile" className="dropdown-item">Profil Saya</Link>
                    <Link to="/premium" className="dropdown-item">Subscription</Link>
                    <Link to="/logout" className="dropdown-item">Keluar</Link>
                </div>
            )}
        </div>
    );
};

export default ProfileNav;