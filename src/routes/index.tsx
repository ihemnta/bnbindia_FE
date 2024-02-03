import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import Layout from '../components/Layout/Layout';
import AboutUs from '../pages/AboutUs';

const RouterConfig = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-bnb" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
