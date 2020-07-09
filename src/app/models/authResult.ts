import { User } from './user';

export class AuthResult {
    user: User;
    accessToken: string;
    expiresIn: number;
}