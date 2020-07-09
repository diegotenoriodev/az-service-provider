import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menuActive: boolean = false;

    isAuthenticated() {
        return this.authService.isLoggedIn;
    }

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    toggleMenu() {
        this.menuActive = !this.menuActive;
    }
    
    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

}