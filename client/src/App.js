import './App.css';
import Header from './components/Header'
import {  Routes, Route, useLocation } from "react-router-dom"
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'



function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <Routes location={location}>      
        <Route path="/about" element={<About />}/>
        {/*<Route path="/churches" element={<Churches />}/>
        <Route path="/getInvolved" element={<GetInvolved />}/>/*/}
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
