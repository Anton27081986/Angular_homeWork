import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: this.email,
            password: this.password
        })
    }

    public logIn(): void {
        this.authService.login(this.form.value)
            .subscribe((data) => {
                this.authService.setUserEmail(this.form.value.email);
                this.authService.setUserToken(data);
                this.form.reset();
                this.router.navigate(['/news']).then()
            },
                () => { alert('Не верный Логин или Пароль') }
            );

    }


}
