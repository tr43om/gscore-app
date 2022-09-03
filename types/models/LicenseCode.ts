/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Subscribe } from './Subscribe';
import type { User } from './User';

export type LicenseCode = {
    id: number;
    code: string;
    origin: string;
    status: LicenseCode.status;
    subscribeId: number;
    subscribe: Subscribe | null;
    userId: number;
    user: User | null;
};

export namespace LicenseCode {

    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        HOLD = 'HOLD',
    }


}
