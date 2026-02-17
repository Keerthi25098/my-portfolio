import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Ecommerce from "./pages/Ecommerce";
import Weather from "./pages/Weather";
import Employee from "./pages/Employee";
import Calculator from "./pages/Calculator";
import Car from "./pages/Car";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/dual" element={<Ecommerce />} />
         <Route path="/skycast" element={<Weather />} />
         <Route path="/owlix" element={<Employee />} />
         <Route path="/calc" element={<Calculator />} />
         <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
