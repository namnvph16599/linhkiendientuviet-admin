import React, { memo } from 'react';

import { useModal } from '@/src/hooks';
import { ConfirmModalState } from '@/src/models';

const ConfirmModal: React.FC<ConfirmModalState> = ({
    onApply = () => {
        return;
    },
    onCancel = () => {
        return;
    },
    title,
    message,
    showCancel = true,
    showIcon = true,
    cancelLabel,
    applyLabel,
}) => {
    const { closeModal } = useModal();

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 sm:gap-8">
                {showIcon && (
                    <>
                        <p>Cấu hình modal</p>
                    </>
                )}
                <div>
                    {title && typeof title === 'string' ? (
                        <h1 className="mb-2 text-center text-lg font-bold tracking-[.75px] sm:text-2xl">
                            {title || 'nội dung yêu cầu confirm'}
                        </h1>
                    ) : (
                        title
                    )}

                    {message && typeof message === 'string' ? (
                        <div>
                            <p className="text-center">{message}</p>
                        </div>
                    ) : (
                        message
                    )}
                </div>

                <div className={`grid ${showCancel ? 'grid-cols-2' : 'grid-cols-1'} w-full gap-3`}>
                    <button
                        className="primaryButton w-full py-1.5 text-sm font-bold leading-[18px] sm:text-lg"
                        onClick={() => {
                            onApply();
                            closeModal();
                        }}
                    >
                        {applyLabel || 'Ok'}
                    </button>
                    {showCancel && (
                        <button
                            className="secondaryButton w-full py-1.5 text-sm font-bold leading-[18px] sm:text-lg"
                            onClick={() => {
                                onCancel();
                                closeModal();
                            }}
                        >
                            {cancelLabel || 'Cancel'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(ConfirmModal);
