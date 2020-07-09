import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { AuthResult } from '../models/authResult';

@Injectable()
export class UsersService extends BaseService<User> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'users');
        console.log('users');
     }

    post(value: User) {
        return super.post(value);
    }

    validateUser(value: User): Promise<AuthResult> {
        return super.postToPath<AuthResult>(value, 'authorize');
    }

    getCurrentUser() : Promise<User> {
        return this.getEntity<User>('current');
    }

    getUsers(): Promise<User[]> {
        return this.getItems();
    }

    deleteUser(userId: string) {
        return this.delete(userId);
    }
}