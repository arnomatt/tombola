import { Route, Routes } from 'react-router'

import './App.css'
import { Landing } from './pages/Landing'
import { Tabellone } from './pages/Tabellone'
import { Cartelle } from './pages/Cartelle'
import { NavBar } from './components/navigation/NavBar'

function App() {

  return (
    <div className='app'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tabellone" element={<Tabellone />} />
        <Route path="/cartelle" element={<Cartelle />} />
      </Routes>
    </div>
  )
}

export default App
