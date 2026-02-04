import { Route, Routes } from 'react-router'
import './App.css'

import { Landing } from './pages/Landing'
import { Tabellone } from './pages/Tabellone'
import Cartelle from './pages/Cartelle'
import { useState } from 'react'
import { Modal } from './components/modal/Modal'
import { NavBar } from './components/navigation/NavBar'

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div className='app'>
      <NavBar />
      {isModalVisible && <Modal setModalVisibility={setModalVisibility} />}
      <Routes>
        <Route path="/" element={<Landing setModalVisibility={setModalVisibility} />} />
        <Route path="/tabellone" element={<Tabellone />} />
        <Route path="/cartelle/:num" element={<Cartelle />} />
      </Routes>
    </div>
  )
}

export default App
