import { Component, NgZone } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    submitting: boolean = false;
    error: string = '';

    get f() { return this.loginForm.controls; }

    constructor(private authService: AuthService,
        private ngZone: NgZone,
        private formBuilder: FormBuilder,
        private router: Router) {
        // window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
        // window['onFailure'] = (error) => ngZone.run(() => this.onFailure(error));
    }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/']);
        } else {
            this.loginForm = this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]]
            });
        }
    }

    onSubmit() {
        this.authService
            .login(
                this.loginForm.value, 
                () => this.router.navigate(['/']), 
                (e: any) => {
                    this.loginForm.controls.password.setValue('');
                    this.loginForm.controls.password.markAsUntouched();
                    this.error = e;
            });
    }
}