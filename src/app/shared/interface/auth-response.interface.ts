import { User } from "./user.interface";

export interface AuthResponse {
    token: string;
    expiresIn: number;
    user: User;
  }