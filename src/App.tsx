import { Route, Routes } from 'react-router'
import { useState } from 'react'
import './App.css'

import { Landing } from './pages/Landing'
import { Tabellone } from './pages/Tabellone'
import { Cartelle } from './pages/Cartelle'
import { NavBar } from './components/navigation/NavBar'
import { Modal } from './components/modal/Modal'
import { ModalContext } from './contexts/modalContext'

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div className='app'>
      <ModalContext value={{ isModalVisible, setModalVisibility }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tabellone" element={<Tabellone />} />
          <Route path="/cartelle" element={<Cartelle />} />
        </Routes>
        {isModalVisible && <Modal />}
      </ModalContext>
    </div>
  )
}

export default App
