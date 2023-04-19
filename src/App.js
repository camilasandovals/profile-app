import About from './components/about.jsx';
import Quote from './components/Quote.jsx';
import Grid from './components/Grid.jsx';
import PicCarousel from './components/Carousel.jsx'
import Video from './components/Video.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About  />
        <Quote />
        <Grid />
        <PicCarousel /> 
        <Video />
        <Footer />

      </header>
    </div>
  );
}

export default App;
