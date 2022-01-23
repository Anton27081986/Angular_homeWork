import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: this.name,
            secondName: this.secondName,
            email: this.email,
            password: this.password
        });
    }

    public registration(): void {
        console.log(this.form);
        this.authService.registration(this.form.value)
            .subscribe(data => {
                console.log(data);
            });
    }
}
