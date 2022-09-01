/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuySubscribeDto } from '../models/BuySubscribeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentsService {

    /**
     * Buy subscribe
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static paymentsControllerBuySubscribe(
requestBody: BuySubscribeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payments/buy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
