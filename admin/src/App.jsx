import { useState, useEffect } from 'react';
import "./app.css";
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true); // Track authentication state
  const [admin, setAdmin] = useState(false)
  useEffect(()=>{
    try {
      setAdmin(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin);
    } catch(e) {
      console.error(e)
    }
  }, [])
  
  
  

  return (
    <Router>

      {!admin ? (
        <Routes>
          <Route path="/" element={<Login onComplete={() =>  setAdmin(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin)}/>} />
        </Routes>
      ) : (
        <>

          <div className="container">
            <div className="top"> <Topbar /></div>
            <div className="side">  <Sidebar /></div>
          <div className="others">

        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          </div>
        </>
      )}
    </Router>
  );
}


export default App;
