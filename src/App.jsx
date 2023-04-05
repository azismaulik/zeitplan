import "./App.css";
import Fitur from "./sections/Fitur";
import Harga from "./sections/Harga";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Testi from "./sections/Testi";
import Download from "./sections/Download";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Why />
      <Fitur />
      <Harga />
      <Testi />
      <Download />
      <Footer />
    </>
  );
}

export default App;
