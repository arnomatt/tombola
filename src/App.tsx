import { Route, Routes } from 'react-router';
import './App.css';
import { Landing } from './pages/Landing';
import { Tabellone } from './pages/Tabellone';
import { Cartelle } from './pages/Cartelle';
import React, { useState } from 'react';
import { Modal } from './components/modal/Modal';
import { NavBar } from './components/navigation/NavBar';

interface AppRoutesProps {
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const AppRoutes = React.memo((props: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Landing setModalVisibility={props.setModalVisibility} />} />
      <Route path="/tabellone" element={<Tabellone />} />
      <Route path="/cartelle/:num" element={<Cartelle />} />
    </Routes>
  )
})

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <div className='app'>
      <NavBar />
      {isModalVisible && <Modal setModalVisibility={setModalVisibility} />}
      <AppRoutes setModalVisibility={setModalVisibility} ></AppRoutes>
    </div>
  )
}

export default App
