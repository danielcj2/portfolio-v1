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

const cursor = document.getElementById("cursor");
const cursorCircle = document.getElementById("cursorCircle");

const animateCursor = (event, interacting) => {
  const x = event.clientX - cursor.offsetWidth / 2, 
        y = event.clientY - cursor.offsetHeight / 2;

  const mouseMove = {
    transform : `translate(${x}px, ${y}px) scale(${interacting ? 2.5 : 1})` 
  }

  const mouseCircleMove = {
    transform : `translate(${event.clientX - cursorCircle.offsetWidth / 2}px, ${event.clientY - cursorCircle.offsetWidth / 2}px)` 
  }

  cursor.animate(mouseMove, {duration: 1000, fill: "forwards"});
  cursorCircle.animate(mouseCircleMove, {duration: 3000, fill: "forwards"});
}

window.onmousemove = event =>{
  const interactable = event.target.closest(".interactable") || event.target.closest(".slick-center"),
        interacting = interactable !== null;

  animateCursor(event, interacting);
}

export default App;
