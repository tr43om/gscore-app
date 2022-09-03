/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LicenceCodeResponseDto } from './LicenceCodeResponseDto';

export type UserResponseDto = {
    id: number;
    email: string;
    username: string;
    subscribes: Array<any[]> | null;
    codes: Array<LicenceCodeResponseDto> | null;
};
