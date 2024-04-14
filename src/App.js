// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/Home';
import About from './components/about';
import File from './components/File';
import Contact from './components/Contact';
import GallerySectionComponent from './components/Gallery';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
