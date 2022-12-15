import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import './css/App.css'
import Products from './components/Products'
import Home from './components/Home';
import ProductDetail from './components/ProductDetail'
function App() {

  return (
    <Router class='body'>
      <Header />
     
      <Routes>
        <Route path='/' element={< Home/>}  />
        <Route path='/Home' element={<Home />} />
        <Route path="/Products" element={<Products/>} />
        <Route path='/Products/:id' element={<ProductDetail />} />
        
            
   
      </Routes>
  
    </Router>
  );
}

export default App;
