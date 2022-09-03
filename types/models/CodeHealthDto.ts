/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CodeHealthDto = {
    code: string;
    origin: string;
    status: CodeHealthDto.status;
    currentPeriodStart: number | null;
    currentPeriodEnd: number | null;
};

export namespace CodeHealthDto {

    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        HOLD = 'HOLD',
    }


}
