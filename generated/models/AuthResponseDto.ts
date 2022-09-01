/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponseDto } from './UserResponseDto';

export type AuthResponseDto = {
    token: string;
    user: UserResponseDto;
};
