import React, { useCallback } from 'react';
import { Dialog, DialogContent, DialogProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface BaseModalProps extends DialogProps {
  handleClose: () => void,
  disableCloseOnBackdropClick?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({
  open = false,
  handleClose,
  disableCloseOnBackdropClick = true,
  children,
  ...rest
}) => {
  const disableCloseHandle = useCallback(
    (event, reason) => {
      if (reason === 'backdropClick') {
        return;
      }

      handleClose();
    },
    [handleClose]
  );

  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={disableCloseOnBackdropClick ? disableCloseHandle : handleClose}
      disableEscapeKeyDown={disableCloseOnBackdropClick ? true : false}
      scroll="body"
      {...rest}
    >
      <CloseIcon
        className="absolute top-3 right-3 md:top-4 md:right-4 font-bold z-10 cursor-pointer"
        onClick={handleClose}
      />
      <DialogContent
        // sx={(theme) => {
        //   return {
        //     [theme.breakpoints.up('sm')]: {
        //       padding: '24px 22px'
        //     },
        //     [theme.breakpoints.up('md')]: {
        //       padding: '40px 38px'
        //     },
        //   };
        // }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
