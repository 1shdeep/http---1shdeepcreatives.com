import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Projects from './Pages/Projects/Projects'
import Details from './Pages/Details/Details';
import Form from './Components/Form/Form';
import LoginPage from './LoginPage/Login';
import AdminPanel from './Admin/AdminPanel';
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Details" element={<Details />}/>
          <Route path="/Form" element={<Form />}/>
          <Route path="/LoginPage" element={<LoginPage />}/>
          <Route path="/Admin" element={<AdminPanel />}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
