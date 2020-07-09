import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivableComponent } from '../base-component/activable.component';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent extends ActivableComponent implements OnInit {
    get isAuthenticated(): boolean {
        return this.authService.isLoggedIn;
    }

    get userProfile(): User {
        if (this.isAuthenticated) {
            console.log(this.authService.userProfile);
            return this.authService.userProfile;
        }

        return new User();
    }

    constructor(private authService: AuthService) {
        super();
    }

    ngOnInit() { }
}