import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginData, IUserData } from '../models/userData';

interface IAuthenticationInfo {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {

    }

    public registration(object: IUserData): Observable<IAuthenticationInfo> {
        return this.http.post<IAuthenticationInfo>(`${environment.APIUrl}/auth/registration`, object);
    }

    public logining(object: ILoginData): Observable<IAuthenticationInfo> {
        return this.http.post<IAuthenticationInfo>(`${environment.APIUrl}/auth/login`, object);
    }
}
