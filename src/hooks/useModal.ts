import { useContext } from 'react';
import { ModalContext } from '@/src/contexts/modalContext';

export const useModal = () => useContext(ModalContext);
