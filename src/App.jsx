
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/HomePage";
import Footer from "./components/Footer";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import NotFound from "./screens/NotFound";
import About from "./screens/About";
import Skills from './screens/Skills'

function App() {
  return (
    <BrowserRouter basename="/Najeeb-Khan" >
      <div className="h-calc-screen-160  w-[100%]">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/resume" element={<Resume />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Skills />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
