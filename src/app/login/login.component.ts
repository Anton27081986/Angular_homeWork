import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required, Validators.minLength(5)]);


    constructor(private loginServices: AuthService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: this.email,
            password: this.password
        })
    }

    public logIn() {
        console.log(this.form);
        this.loginServices.logining(this.form.value)
            .subscribe(data => {
                console.log(data);
            });
    }
}
