import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    processLogin: boolean;
    buttonText: string;
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.initForm();
        this.processLogin = false;
        this.buttonText = 'Sign In';
        this.errorMessage = null;
    }

    initForm() {
        this.loginForm = this.formBuilder.group(
            {
                email: [
                    '',
                    [
                        Validators.required,
                        Validators.email
                    ]
                ],
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators[Symbol.hasInstance]
                    ]
                ]
            }
        );
    }

    loginWithCredentials() {
        const formValues = this.loginForm.value;
        const userInfos = {
            email: formValues.email,
            password: formValues.password
        };
        console.log(userInfos);
        this.router.navigateByUrl('/dashboard');
    }
}
