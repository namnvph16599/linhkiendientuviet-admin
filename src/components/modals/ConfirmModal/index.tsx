import { Button } from '@mui/material';
import React, { memo } from 'react';
import { ConfirmModalType } from 'src/config';
import { useModalSelector } from 'src/hooks';

export interface ConfirmModalProps {
  type: ConfirmModalType;
  title: string;
  message: string;
  onApply: () => void;
  onCancel: () => void;
  showCancel?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  type = ConfirmModalType.WARNING,
  onApply = () => {return;},
  onCancel = () => {return;},
  title = 'Confirm activity',
  message = '',
  showCancel = true,
}) => {
  const { closeModal } = useModalSelector();

  return (
    <div className="grid grid-cols-1 gap-12">
      <div>
      </div>

      {message && (
        <div className="text-white">
          <p className="text-center">{message}</p>
        </div>
      )}

      <div className={`grid ${showCancel ? 'grid-cols-2' : 'grid-cols-1'} gap-5`}>
        {showCancel && (
          <Button
            className="col-span-1"
            onClick={() => {onCancel(); closeModal();}}
            sx={{
              background: 'transparent',
              color: 'green.main',
              border: '1px solid',
              borderColor: 'green.main',
            }}
          >
            Cancel
          </Button>
        )}
        <Button className="col-span-1" onClick={() => {onApply(); closeModal();}}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default memo(ConfirmModal);
