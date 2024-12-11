import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Assets/Components/NavBar';
import AboutPage from './Assets/Pages/AboutPage';
import ContactPage from './Assets/Pages/ContactPage';
import HomePage from './Assets/Pages/HomePage';
function App() {
  return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        </BrowserRouter>
    )  
}

export default App;
