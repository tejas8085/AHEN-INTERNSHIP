import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Bookings from './components/Bookings/Bookings';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/bookings" element={<Bookings />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      </BrowserRouter>
      {/* <Navbar/>       */}
    </div>
  );
}

export default App;
