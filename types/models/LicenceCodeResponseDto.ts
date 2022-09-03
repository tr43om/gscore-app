/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscribeResponseDto } from './SubscribeResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type LicenceCodeResponseDto = {
    id: number;
    code: string;
    origin: string;
    status: LicenceCodeResponseDto.status;
    subscribeId: number;
    subscribe: SubscribeResponseDto | null;
    userId: number;
    user: UserResponseDto | null;
};

export namespace LicenceCodeResponseDto {

    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        HOLD = 'HOLD',
    }


}
