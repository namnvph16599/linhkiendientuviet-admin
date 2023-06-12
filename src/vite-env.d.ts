interface AuthTokenData {
    accessToken: string;
    refreshToken: string;
}

interface BaseResponse<T = unknown> {
    data?: T;
    statusCode: number;
    message: string;
    lastPage?: number;
    totalPages?: number;
    totalItems?: number;
}

interface LoginPayload {
    email: string;
    password: string;
    deviceId: string;
    captcha: string;
}

type ToastContextType = {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
};

interface User {
    id?: string;
    name: string;
    email: string;
    referralCode?: string;
    avatar?: string | File;
    rankingHashrate?: numeber;
    extraHashrate?: number;
    basedHashrate?: number;
    totalBEARMined?: number;
}

interface BearAttribute {
    name: string;
    display_type: string;
    trait_type: string;
    min_value: number;
    max_value: number;
    value: number | string;
    description: string;
}

interface NextLevel {
    level: string | number;
    updateSuccessRate: number;
    upgradePrice: number;
    insurancePrice: number;
}

interface Nft {
    id: string;
    nftType: string;
    class: string;
    userId: string;
    isListing: boolean;
    isMinted: boolean;
    teamId: string;
    price: number;
    isLocked: boolean;
    itemId: string;
    attributes: BearAttribute[];
    image: string;
    background: string;
    description: string;
    nextLevel?: NextLevel;
    createdAt?: string;
}

interface BearNft extends Nft {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    isLunarNewYear?: boolean;
}

interface Booster extends Nft {
    id: string;
}

interface ListingNft {
    id: string;
    nft: BearNft;
    price?: number;
    userAddress?: string;
}

interface CommonReactNodeProps {
    children?: ReactNode;
    className?: string;
}

interface VerifySignatureParams {
    signature: string;
    address: string;
    referralCode?: string;
}

interface VerifySignatureData {
    accessToken: string;
    refreshToken: string;
}

interface MintedReport {
    totalBurnedBear: number;
    totalMintedBear: number;
}

interface BearTeam {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    id: string;
    userId: string;
    bearIds: string[];
    bears: BearNft[];
    powerUp: number;
    teamUpName: string;
    basedHashrate: number;
    hashrate: number;
    level: number;
    booster?: Booster;
}

interface PaginationResponse<T = unknown> {
    data?: T[];
    statusCode: number;
    message: string;
    totalItems: number;
    totalCommission?: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: true;
    hasNextPage: true;
    prevPage: number;
    nextPage: number;
}

interface Attributes {
    name: string;
    trait_type: string;
    value: number;
    description: string;
}

interface PaginationPayload {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortDirection?: string;
}

interface GetBearsPayload extends PaginationPayload {
    level?: number;
    class?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}

interface UnminedParams {
    bearId: string;
    teamId: string;
}

interface UpgradeParams {
    bearOneId: string;
    bearTwoId: string;
    useInsurance: boolean;
    fee: number;
}

interface BearMessageHash {
    itemId: number;
    address: string;
    timestamp: number;
    messageHash: string;
}

interface CoinMessageHash {
    claimId: string;
    address: string;
    amount: number;
    timestamp: number;
    currency: number;
    messageHash: string;
}

interface Lottery {
    id: string;
    reward: RewardType;
    isClaimed: boolean;
    quantity: number;
    nft?: BearNft;
    txHash?: string;
    createdAt: string;
    updatedAt: string;
    ownerAddress?: string;
}
interface BearFilters {
    isLocked?: boolean;
    levels?: string[];
    classes?: string[];
}

interface ClaimGiftCard {
    id: string;
    lastClaimedCard: string;
    cardQuantity: number;
}

interface AvailableBox {
    standard: number;
    premium: number;
    ultra: number;
    happiness: number;
    wealth: number;
    longevity: number;
}

interface OpenedBox {
    result: {
        totalBear: number;
        totalTeam: number;
        totalTicket: number;
        dailyCards: number;
        totalBooster?: number;
        totalEnvelope?: number;
    };
    availableBox: AvailableBox;
}

interface ListingMessageHash {
    timestamp: number;
    userAddress: string;
    action: string;
    listingId: number;
    sellerAddress: string;
    price: BigNumber;
    messageHash: string;
}

interface CardSelected {
    id: string;
    className: string;
    text: string;
    photo: string;
}

interface RewardSample {
    reward: number;
    photos: string[];
    requiredText: {
        slogan: string;
        elements: string[];
    };
    requiredClass: string[];
    cardSelectees: BearNft[];
}

interface CardReward {
    id: string;
    userId: string;
    address: string;
    reward: number;
    txHash: string;
    createdAt: string;
    updatedAt: string;
}

interface CardDraftRequest {
    sampleIndex: number;
    sampleItemIndex: number;
    cardId: string;
}

interface NewYearReward {
    id: string;
    nft: BearNft;
}

interface BearPlaceFilters {
    nftType?: string[];
    levels?: string[];
    classes?: string[];
    isLocked?: boolean;
}

interface FilterItem {
    label?: string;
    value: unknown;
    icon?: string;
}

interface FilterSection {
    type: FilterType;
    items: FilterItem[];
    name: string;
    label: string;
}

interface OlderFilter {
    [key: string]: unknown;
}

interface Commission {
    quantity?: string;
    boxType?: string;
    commission: number;
    createdAt: string;
    address?: string;
    page?: number;
}

interface WeekFilter {
    label: string;
    fromDate: Date;
    toDate: Date;
}

type WeekRange = Pick<WeekFilter, 'fromDate' | 'toDate'>;

interface Envelope {
    id: string;
    userId: string;
    isOpened: boolean;
    isClaimed: boolean;
    reward: number;
}

interface GetChallengePayload extends PaginationPayload {
    group: string;
    number?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}
interface ChallengeAward {
    value: number;
    unit: string;
}

interface ReachingMission {
    name: string;
    value: number;
}
interface ChallengeType {
    id: string;
    task: string;
    name: string;
    description: string;
    group: string;
    expect?: ReachingMission;
    awards: ChallengeAward;
}
interface ChallengeMission {
    id: string;
    value?: ReachingMission;
    challenge: ChallengeType;
    isClaimed: boolean;
}
