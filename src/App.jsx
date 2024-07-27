import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import AllProjectData from "./components/AllProjectData";
import AllCertificateData from "./components/AllCertificateData";
import Footer from './components/Footer'

import "./styles/app.scss";



const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/projects" element={<AllProjectData />}>Projects</Route>
          <Route path="/certificates" element={<AllCertificateData />}>Certificate</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
