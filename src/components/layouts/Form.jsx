import { Link } from 'react-router';
import chillLogo from '/src/assets/chill-logo.png';
import GoogleButton from '/src/components/atoms/GoogleButton';
import '/src/styles.css';
const Form = ({ type }) => {
  const isLogin = type === 'login';

  return (
    <form className="container">
      <div className="screen">
        <div className="screen_title">
          <img src={chillLogo} alt="CHILL icon" className="chill-icon" />
        </div>
        <h2 id="subtitle1">{isLogin ? 'Masuk' : 'Daftar'}</h2>
        <p id="subtitle2">{isLogin ? 'Selamat datang kembali!' : 'Selamat datang!'}</p>
        <div className="screen_form">
          <div className="form_group">
            <label htmlFor="username" className="form_label">Username</label>
            <input type="text" id="username" className="form_input" placeholder="Masukkan username" />
          </div>
          <div className="form_group">
            <label htmlFor="password" className="form_label">Kata Sandi</label>
            <input type="password" id="password" className="form_input" placeholder="Masukkan kata sandi" />
          </div>

          {!isLogin && (
            <div className="form_group">
              <label htmlFor="confirmPassword" className="form_label">Konfirmasi Kata Sandi</label>
              <input type="password" id="confirmPassword" className="form_input" placeholder="Masukkan konfirmasi kata sandi" />
            </div>
          )}

          <p className="form_text">
            {isLogin ? (
              <>
                Belum punya akun? <Link to="/register" className="form_link">Daftar</Link>
                <span><a href="#" className="form_right-align">Lupa kata sandi?</a></span>
              </>
            ) : (
              <>
                Sudah punya akun? <Link to="/" className="form_link2">Masuk</Link>
              </>
            )}
          </p>

          <button className="form_button" type="button">{isLogin ? 'Masuk' : 'Daftar'}</button>
          <p className="atau">Atau</p>
          <GoogleButton text={isLogin ? 'Masuk dengan Google' : 'Daftar dengan Google'} />
        </div>
      </div>
    </form>
  );
}

export default Form