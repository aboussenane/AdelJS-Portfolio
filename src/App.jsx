
import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
//import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Title from './pages/Title';
import Contact from './pages/Contact';
import OtherWork from './pages/OtherWork';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Skills />
      <Projects />
      <OtherWork />
      <Contact />
    </div>
  );
}

export default App;