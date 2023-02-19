import './App.css';
import bg_img from "./assets/bg-img.jpg";
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero imageSrc={bg_img} />
    </div>
  );
};

export default App;
