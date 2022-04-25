import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
