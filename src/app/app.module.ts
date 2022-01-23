import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu"
import { Route, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { AdminComponent } from './admin/admin.component';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MusicComponent } from './music/music.component';
import { PictureComponent } from './picture/picture.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





const routes: Route[] = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent },
    { path: 'music', component: MusicComponent },
    { path: 'picture', component: PictureComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        FilmsComponent,
        AdminComponent,
        MusicComponent,
        PictureComponent,
        NewsComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        RouterModule.forRoot(routes),
        MatPaginatorModule,
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
