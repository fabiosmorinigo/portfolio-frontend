import React from 'react'
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Article/Home/Home';
import { About } from './components/Article/About/About';
import { Skills } from './components/Article/Skills/Skills';
import { Projects } from './components/Article/Projects/Projects';
import { Contact } from './components/Article/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './style.css';

const App = () => {
  return (
    <main className='container'>
      <Header />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App