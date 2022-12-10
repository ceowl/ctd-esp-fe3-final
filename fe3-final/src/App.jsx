
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact.jsx'
import Home from './Routes/Home.jsx'
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useGlobalStates } from "./Components/utils/global.context";
import  {Routes, Route } from 'react-router-dom'

function App() {

  const {theme} = useGlobalStates();

  return (
      <div className="App">
        <div className={theme}>
          <Navbar/>
            <Routes>
              <Route path="/Detail/:id" element={<Detail/>} />
              <Route path="/" element={<Home/>} />
              <Route path ="/Home" element={<Home/>} /> 
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/Favs" element={<Favs/>} />
            </Routes>
          <Footer/>
          </div>
      </div>
  );
}

export default App;
