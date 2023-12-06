import LandingPage from './pages/LandingPage';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { Route, Routes } from 'react-router-dom';


import './css/app.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/project" element={<Project />} />  
      </Routes>
    </>
  );
}

export default App;
