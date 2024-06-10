
import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
//import Contact from './pages/Contact';
import Internships from './pages/Internships';
import Projects from './pages/Projects';
import Title from './pages/Title';
import Contact from './pages/Contact';
import OtherWork from './pages/OtherWork';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Title />
      <Internships />
      <Projects />
      <OtherWork />
      <Contact />
    </div>
    
  );
}

export default App;