/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LicenceCodeResponseDto } from "./LicenceCodeResponseDto";
import type { ProductResponseDto } from "./ProductResponseDto";
import type { UserResponseDto } from "./UserResponseDto";

export type SubscribeResponseDto = {
  id: number;
  userId: number;
  user: UserResponseDto;
  productId: number;
  product: ProductResponseDto;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: SubscribeResponseDto.status;
  codes: Array<LicenceCodeResponseDto>;
};

export namespace SubscribeResponseDto {
  export enum status {
    ACTIVE = "ACTIVE",
    UNPAID = "UNPAID",
    CANCELED = "CANCELED",
  }
}
