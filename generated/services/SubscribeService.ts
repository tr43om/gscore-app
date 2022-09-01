/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeSubscribeProductDto } from '../models/ChangeSubscribeProductDto';
import type { SubscribeResponseDto } from '../models/SubscribeResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscribeService {

    /**
     * Get self subscribes
     * @returns SubscribeResponseDto 
     * @throws ApiError
     */
    public static subscribeControllerGetSelfSubscribe(): CancelablePromise<Array<SubscribeResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/subscribe/self',
        });
    }

    /**
     * Change subscribe product
     * @param requestBody 
     * @returns SubscribeResponseDto 
     * @throws ApiError
     */
    public static subscribeControllerChangeSubscribeProduct(
requestBody: ChangeSubscribeProductDto,
): CancelablePromise<SubscribeResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/subscribe/change-product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
