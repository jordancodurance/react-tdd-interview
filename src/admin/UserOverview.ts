// @ts-ignore
import copy from "./user-overview-copy.json" assert { type: 'json' };

export interface UserOverview {
    name: string;
    rating: number;
    country: string;
    submittedOn: string;
    verificationStatus: VERIFICATION_STATUS;
}

export const VERIFICATION_STATUS = {
    VERIFIED: copy.verifiedStatus,
    UNVERIFIED: copy.unverifiedStatus
} as const;

export type VERIFICATION_STATUS = typeof VERIFICATION_STATUS[keyof typeof VERIFICATION_STATUS];