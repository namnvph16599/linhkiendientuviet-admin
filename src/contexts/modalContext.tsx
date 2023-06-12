import React, { useCallback, useState } from 'react';
import BaseModal from 'src/components/modals/BaseModal';
import ConfirmModal from 'src/components/modals/ConfirmModal';
import { ConfirmModalType } from 'src/config';
import { BaseModalState, ConfirmModalState, ModalContextType } from '../models';

export const initialConfirmModal: ConfirmModalState = {
    type: ConfirmModalType.WARNING,
    title: 'Activity confirm.',
    message: 'Are you sure to continue?',
    onApply: () => {
        return;
    },
    onCancel: () => {
        return;
    },
};

export const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);

export const ModalProvider: React.FC = ({ children }) => {
    const [openBaseModal, setOpenBaseModal] = useState<boolean>(false);
    const [baseModalState, setBaseModalState] = useState<BaseModalState>({
        content: <></>,
        modalProps: {},
    });

    const showModal = useCallback(
        (config: BaseModalState) => {
            setBaseModalState(config);
            setOpenBaseModal(true);
        },
        [setBaseModalState, setOpenBaseModal],
    );

    const closeModal = useCallback(() => {
        if (typeof baseModalState?.onClose === 'function') {
            baseModalState.onClose();
        }

        setOpenBaseModal(false);
    }, [setOpenBaseModal]);

    const showConfirm = useCallback(
        (config: Partial<ConfirmModalState>) => {
            const confirmModalProps = Object.assign({ ...initialConfirmModal, ...config });

            showModal({
                content: <ConfirmModal {...confirmModalProps} />,
            });
        },
        [showModal],
    );

    return (
        <ModalContext.Provider
            value={{
                showModal,
                closeModal,
                showConfirm,
            }}
        >
            {children}

            <BaseModal open={openBaseModal} handleClose={closeModal} {...baseModalState.modalProps}>
                {baseModalState.content}
            </BaseModal>
        </ModalContext.Provider>
    );
};
