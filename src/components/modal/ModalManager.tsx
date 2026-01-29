import { useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { NavBar } from '../navigation/NavBar';
import { Modal } from './Modal';

export function ModalManager() {
    const [isModalVisible, setModalVisibility] = useState(false);

    return (
        <ModalContext value={{ isModalVisible, setModalVisibility }}>
            <NavBar />
            {isModalVisible && <Modal />}
        </ModalContext>
    );
}
