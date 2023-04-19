import About from './components/about.jsx';
import Quote from './components/Quote.jsx';
import Grid from './components/Grid.jsx';
import PicCarousel from './components/Carousel.jsx'
import Video from './components/Video.jsx';
import Footer from './components/Footer.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
        <HeroBanner/>
        <About  />
        <Quote />
        <Grid />
        <PicCarousel /> 
        <Video />
        <Footer />

    </div>
  );
}

export default App;
