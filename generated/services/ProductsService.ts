/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductResponseDto } from '../models/ProductResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * Get products list
     * @returns ProductResponseDto 
     * @throws ApiError
     */
    public static productsControllerGetProducts(): CancelablePromise<Array<ProductResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products',
        });
    }

}
