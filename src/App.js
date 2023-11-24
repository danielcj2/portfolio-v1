import LandingPage from './pages/LandingPage';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/project" element={<Project />} /> 
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
