// auth.service.ts
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { AuthResult } from '../models/authResult';

(window as any).global = window;

@Injectable()
export class AuthService {
  private _userProfile: User = null;

  get userProfile(): User {
    if (!this._userProfile) {
      this.loadUserProfile();
    }

    return this._userProfile;
  }

  get expiresAt(): number {
    if (!!localStorage.getItem('expires_at'))
      return Number.parseInt(localStorage.getItem('expires_at'));
    return null;
  }

  get accessToken(): string {
    return localStorage.getItem('access_token');
  }

  get authenticated(): boolean {
    return !!this.accessToken;
  }

  get isLoggedIn(): boolean {
    if (!this.expiresAt)
      return false;

    // Check if current date is before token
    // expiration and user is signed in locally
    var result = Date.now() < this.expiresAt && this.authenticated;

    if (!result) {
      this.logout();
    }

    return result;
  }

  private setAccessToken(value: string) {
    if (!!value) {
      localStorage.setItem('access_token', value);
    }
    else {
      localStorage.removeItem('access_token');
    }
  }

  private setExpiresAt(value: number) {
    if (!!value) {
      localStorage.setItem('expires_at', value.toString());
    }
    else {
      localStorage.removeItem('expires_at');
    }
  }

  constructor(private usersService: UsersService) { }

  private loadingUserProfile: boolean = false;
  private loadUserProfile() {
    console.log('loading user profile');
    if (this.isLoggedIn && !this.loadingUserProfile) {
      this.loadingUserProfile = true;
      this.usersService.getCurrentUser()
        .then(r => {
          this._userProfile = r;
          this.loadingUserProfile = false; 
        })
        .catch(e => {
          console.log(e); 
          this.loadingUserProfile = false;
        });
    }
  }

  private setSession(authResult: AuthResult) {
    this.setExpiresAt(authResult.expiresIn * 1000 + Date.now());
    this.setAccessToken(authResult.accessToken);
    this._userProfile = authResult.user;
  }

  logout() {
    this.setExpiresAt(null);
    this.setAccessToken(null);
    this._userProfile = null;
  }

  login(user: User, success: any, handleError: any) {
    this.usersService
      .validateUser(user)
      .then(r => {
        this.setSession(r); success();
      })
      .catch(e => handleError(e.error[0]));
  }
}