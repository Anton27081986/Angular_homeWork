import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    public form: FormGroup;
    public name = new FormControl('', [Validators.required, Validators.minLength(2)]);
    public secondName = new FormControl('', [Validators.required, Validators.minLength(2)]);
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required, Validators.minLength(5)]);




    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: this.name,
            secondName: this.secondName,
            email: this.email,
            password: this.password
        });
    }

    public registration(): void {
        this.authService.registration(this.form.value)
            .subscribe((data) => {
                console.log(data);
                this.authService.setUserEmail(this.form.value.email);
                this.authService.setUserToken(data);
                this.form.reset();
                this.router.navigate(['/news']).then();
            },
                () => { alert('Данный пользователь уже существует') }
            );
    }

}

