import type { UserResponseDto } from "./UserResponseDto";

export type AuthResponseDto = {
  token: string;
  user: UserResponseDto;
};
