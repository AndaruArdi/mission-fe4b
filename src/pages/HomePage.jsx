import NavBar from '../components/organisms/NavBar'
import Hero from '../components/molecules/Hero'
import Movie from '../components/molecules/Movie'
import Footer from '../components/organisms/Footer'
import '/src/stylesberanda.css'

const HomePage = () => {
  return (
    <>
    <NavBar />
    <main>
    <Hero />
    <Movie />
    </main>
    <Footer />
    </>
  );
}

export default HomePage