import React from 'react';
import Layout from './layout/Layout.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {

  return (
    <Router>
    <div className="App">
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    </div>
  </Router>
  )
}

export default App
