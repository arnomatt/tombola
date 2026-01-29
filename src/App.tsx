import { Route, Routes } from 'react-router'
import './App.css'

import { Landing } from './pages/Landing'
import { Tabellone } from './pages/Tabellone'
import { Cartelle } from './pages/Cartelle'
import { ModalManager } from './components/modal/ModalManager'

function App() {
  return (
    <div className='app'>
      <ModalManager />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tabellone" element={<Tabellone />} />
        <Route path="/cartelle/:num" element={<Cartelle />} />
      </Routes>
    </div>
  )
}

export default App
