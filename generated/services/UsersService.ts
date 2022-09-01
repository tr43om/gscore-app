/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseDto } from '../models/AuthResponseDto';
import type { SignInDto } from '../models/SignInDto';
import type { SignUpDto } from '../models/SignUpDto';
import type { SignUpResponseDto } from '../models/SignUpResponseDto';
import type { UserResponseDto } from '../models/UserResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Sign in
     * @param requestBody 
     * @returns AuthResponseDto 
     * @throws ApiError
     */
    public static usersControllerSignIn(
requestBody: SignInDto,
): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/sign-in',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Sign up
     * @param requestBody 
     * @returns SignUpResponseDto 
     * @throws ApiError
     */
    public static usersControllerSignUp(
requestBody: SignUpDto,
): CancelablePromise<SignUpResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update personal data
     * @param requestBody 
     * @returns UserResponseDto 
     * @throws ApiError
     */
    public static usersControllerUpdatePersonalData(
requestBody: any,
): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update password
     * @param requestBody 
     * @returns UserResponseDto 
     * @throws ApiError
     */
    public static usersControllerUpdatePassword(
requestBody: any,
): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/users/update-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get me
     * @returns UserResponseDto 
     * @throws ApiError
     */
    public static usersControllerGetMe(): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/me',
        });
    }

}
