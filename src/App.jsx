import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </div>
    </Router>
  )
}