import LandingPage from './pages/LandingPage';
import NotFound from './components/NotFound';
import { useTheme } from './components/ThemeContext';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { Route, Routes } from 'react-router-dom';
import DarkMode from "./components/DarkMode";
import LightMode from './components/Lightmode';

import './css/app.css';

function App() {
  const darkTheme = useTheme();

  return (
    <>
      {darkTheme ? <DarkMode /> : <LightMode />}
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/projects/:path" element={<Project />} />  
        <Route path="*" element={<NotFound />}/>
        <Route path="/projects/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
