import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// UTILS
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
