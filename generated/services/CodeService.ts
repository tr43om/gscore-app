/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateLicenseCodeBodyDto } from '../models/ActivateLicenseCodeBodyDto';
import type { LicenseCode } from '../models/LicenseCode';
import type { ManageLicenseCodesDto } from '../models/ManageLicenseCodesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CodeService {

    /**
     * Activate license code
     * @param requestBody 
     * @param origin 
     * @returns LicenseCode 
     * @throws ApiError
     */
    public static licenseCodeControllerActivateCode(
requestBody: ActivateLicenseCodeBodyDto,
origin?: string,
): CancelablePromise<LicenseCode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/code/activate',
            headers: {
                'Origin': origin,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `If license code has already been activated or hold`,
            },
        });
    }

    /**
     * Get self license codes
     * @returns any 
     * @throws ApiError
     */
    public static licenseCodeControllerGetSelfLicencesCodes(): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/code/self',
        });
    }

    /**
     * Manage self license codes
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static licenseCodeControllerManageLicenseCodes(
requestBody: ManageLicenseCodesDto,
): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/code/manage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The number of specified codes does not match the available number`,
                404: `If subscribe not found`,
                409: `If not all codes apply to this subscription or Something went wrong with code management`,
            },
        });
    }

    /**
     * Get license code health
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static licenseCodeControllerGetLicenseCodeHealth(
requestBody: ActivateLicenseCodeBodyDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/code/health',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `If license code not found`,
            },
        });
    }

}
