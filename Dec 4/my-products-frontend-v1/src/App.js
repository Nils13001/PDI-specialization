import logo from './logo.svg';
import './App.css';
import ProductList from './Assets/Pages/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NavBar from './Assets/Components/NavBar';
import AboutPage from './Assets/Pages/AboutPage';
import HomePage from './Assets/Pages/HomePage';
import ContactPage from './Assets/Pages/ContactPage';
import NumOpsPage from './Assets/Pages/NumOpsPage';
import UseContext from './Assets/Pages/UseContext';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/products' element={<ProductList/>} />
      <Route path="/operations" element={<NumOpsPage/>}/>
      <Route path="/useContext" element={<UseContext/>}/>
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <ProductList/>
    // </div>
  );
}

export default App;
