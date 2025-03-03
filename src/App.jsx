

import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";



export default function App () {
    return (
  <BrowserRouter>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
  </BrowserRouter>
    );
}
