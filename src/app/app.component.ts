import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface IUser {
	id: number;
	name: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {

	public authOut: boolean;

	constructor(private router: Router) {
		this.router.events.subscribe(() => {
			if (localStorage.getItem('token')) {
				this.authOut = true;

			}
		})
		console.log('constructor');

	}

	ngOnInit(): void {
		console.log('ng OnInit');
	}

	ngOnDestroy(): void {
		console.log('ng OnDestroy');
	}

	public logOut() {
		localStorage.clear();
	}
}
