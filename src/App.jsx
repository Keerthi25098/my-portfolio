import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Ecommerce from "./pages/Ecommerce";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/dual" element={<Ecommerce />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
