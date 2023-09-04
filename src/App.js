import Homepage from "./components/homepage/Homepage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SignUp from "./components/signup/SignUp";

export default function App() {
  return (
 <>
 <Router>
  <Header />
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
   
 </>
  )
}
