import { Component, OnDestroy, OnInit } from '@angular/core';


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

	constructor() {
		console.log('constructor');
	}

	ngOnInit(): void {
		console.log('ng OnInit');
	}

	ngOnDestroy(): void {
		console.log('ng OnDestroy');
	}
}
