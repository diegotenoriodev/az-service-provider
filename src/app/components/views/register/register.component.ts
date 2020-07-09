import { Component, NgZone, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/mustmatch.validator';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    newUserForm: FormGroup;
    subimtting: boolean = false;

    get f() { return this.newUserForm.controls; }

    constructor(private usersService: UsersService,
        private ngZone: NgZone,
        private formBuilder: FormBuilder) {
        window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
        window['onFailure'] = (error) => ngZone.run(() => this.onFailure(error));
    }

    ngOnInit() {
        this.newUserForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }
    onSignIn(googleUser) {
        alert(googleUser);
        console.log(googleUser);
    }

    onFailure(error) {
        alert(error);
        console.log(error);
    }


    onSubmit() {
        this.subimtting = true;
        this.usersService
            .post(this.newUserForm.value)
            .then(r => this.subimtting = false)
            .catch(e => alert(e));
    }
}