import { Link } from 'react-router';
import ChillLogo from '/src/assets/chill-logo.png';
import ProfileNav from '/src/components/atoms/ProfileNav';
import '/src/stylesberanda.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <ul className="links">
            <Link to="/"><img className="logo" src={ChillLogo} width="100" alt="logo" /></Link>
            <li><Link to="/">Series</Link></li>
            <li><Link to="/">Film</Link></li>
            <li><Link to="/daftarsaya">Daftar Saya</Link></li>
          </ul>
          <ProfileNav />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;