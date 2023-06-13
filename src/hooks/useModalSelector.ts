import { useContext } from 'react';
import { ModalContext } from '@/src/contexts';

export const useModalSelector = () => {
    return useContext(ModalContext);
};
