/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LicenceCodeResponseDto } from './LicenceCodeResponseDto';
import type { ProductResponseDto } from './ProductResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type SubscribeResponseDto = {
    id: number;
    userId: number;
    user: UserResponseDto | null;
    productId: number;
    product: ProductResponseDto | null;
    currentPeriodStart: string | null;
    currentPeriodEnd: string | null;
    status: SubscribeResponseDto.status;
    codes: Array<LicenceCodeResponseDto> | null;
};

export namespace SubscribeResponseDto {

    export enum status {
        ACTIVE = 'ACTIVE',
        UNPAID = 'UNPAID',
        CANCELED = 'CANCELED',
    }


}
