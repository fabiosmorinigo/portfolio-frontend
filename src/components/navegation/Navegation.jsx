import React from 'react'
import { About } from '../Article/About/About'
import { Skills } from '../Article/Skills/Skills'
import { Projects } from '../Article/Projects/Projects'
import { Contact } from '../Article/Contact/Contact'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Switch>
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

        </Switch> 
      </Routes>
    </BrowserRouter>
  )
}

export default Navegation