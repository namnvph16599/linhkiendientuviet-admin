import { useContext } from 'react';
import { ModalContext } from '../contexts/modalContext';

export const useModal = () => useContext(ModalContext);
