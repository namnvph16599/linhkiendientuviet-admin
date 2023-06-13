import { BaseModalProps } from '@/src/components/BaseModal';
import { ReactNode } from 'react';

export interface BaseModalState extends Partial<BaseModalProps> {
    content: any;
    onClose?: () => void;
    hiddenCloseBtn?: boolean;
}

export interface ConfirmModalState {
    title?: string | ReactNode;
    message?: string | ReactNode;
    onApply?: () => unknown;
    onCancel?: () => unknown;
    showCancel?: boolean;
    showIcon?: boolean;
    applyLabel?: string;
    cancelLabel?: string;
}

export interface ModalContextType {
    closeModal: () => void;
    showModal: (config: BaseModalState) => void;
    showConfirm: (config: Partial<ConfirmModalState>, baseModalConfig?: Partial<BaseModalState>) => void;
}

export interface BearPlaceContextType {
    availableBearData: BearNft[];
    miningBearData: BearNft[];
    myListingBearData: ListingNft[];
    totalAvailableBears: number;
    totalMiningBears: number;
    totalListingBears: number;
    totalAvailableBearPage: number;
    totalMiningBearPage: number;
    totalListingBearPage: number;
    setAvailableBearData: (bears: BearNft[]) => void;
    setMiningBearData: (bears: BearNft[]) => void;
    setMyListingBearData: (listings: ListingNft[]) => void;
    loadAvailableBears: () => void;
    loadMiningBears: () => void;
    loadListingBears: () => void;
}
