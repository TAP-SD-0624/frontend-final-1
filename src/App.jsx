import React from "react";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <Router>
      <div className="App" style={{ width: "100%" }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Category" element={<Category />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
