import Profile from "/src/components/layouts/ProfileLayout.jsx";
import NavBar from '../components/organisms/NavBar';

const storedUser = JSON.parse(localStorage.getItem("user"));

const App = () => {
    return (
      <>
          <NavBar />
          <Profile storedUser={storedUser} />
      </>
  );
}

    
 
export default App;
