import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/Albums/TopAlbum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopAlbums />
    </div>
  );
}

export default App;
