/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';

export type PriceResponseDto = {
    id: number;
    isActive: boolean;
    productId: number;
    product: Product | null;
    price: string;
};
