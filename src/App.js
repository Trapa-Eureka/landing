import './App.css';
import bg_img from "./assets/bg-img.jpg";
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Hero imageSrc={bg_img} />
      <Slider imageSrc={bg_img} title={"Title 01"} subtitle={"subtitle 01"} />
      <Slider imageSrc={bg_img} title={"Title 02"} subtitle={"subtitle 02"} flipped={true} />
    </div>
  );
};

export default App;
