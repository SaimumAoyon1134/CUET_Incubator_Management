
import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  // const user = useSelector((state)=>state.user.currentUser);
  const user = false;
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />

      
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
