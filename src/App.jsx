import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/MainPage';
import About from './pages/AboutMe';
import LearningOutcomes from './pages/LearningOutcomes';
import Assignments from './pages/Projects/Assignments';
import PortfolioPage from './pages/Projects/PortfolioPage';
import Studio from './pages/Projects/Studio';
import ClientProject from './pages/Projects/ClientProject';
import PassionProject from './pages/Projects/PassionProject';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning-outcomes" element={<LearningOutcomes />} />
          <Route path="/projects/assignments" element={<Assignments />} />
          <Route path="/projects/portfolio" element={<PortfolioPage />} />
          <Route path="/projects/studio" element={<Studio />} />
          <Route path="/projects/client-project" element={<ClientProject />} />
          <Route path="/projects/passion-project" element={<PassionProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
