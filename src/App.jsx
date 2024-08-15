import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import MyCart from './pages/MyCart/MyCart.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import About from './pages/About/About.jsx';

function App() {
  return (

    <Router>
    <div className="App">
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/p" element={<Product />} />
              <Route path="/m" element={<MyCart />} />
              <Route path="/about" element={<About/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/signin" element={<SignIn/>} />
            </Routes>
        </Layout>
    </div>
  </Router>
);
}

export default App;
