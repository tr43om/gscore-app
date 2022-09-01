/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceResponseDto } from './PriceResponseDto';

export type ProductResponseDto = {
    id: number;
    sitesCount: number;
    name: number;
    prices: Array<PriceResponseDto> | null;
};
