import Genre from "./components/Genre"
import Header from "./components/Header"
import Production from "./components/Production"
import Slider from "./components/Slider"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

function App() {

  return (
    <>
     <div className="min-h-screen bg-gray-900 font-display">
        <Header/>
        <Slider/>
        <Production/>
        <Genre/>
        <Footer/>
     </div>
    </>
  )
}

export default App
