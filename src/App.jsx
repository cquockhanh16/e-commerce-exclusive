import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignupForm from "./pages/Login";
import Login from "./pages/Singup";
import FlashSales from "./pages/About";





function App() {
  return (
    <>
      <Router>
        <Header />
        <FlashSales/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<SignupForm/>} />
          <Route path='/login' exact element={<Login/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
