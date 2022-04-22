import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent {
	title = 'frontend';
	items: MenuItem[] = [];
	
	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: '/home'
			},
			{
				label: 'Category',
				icon: 'pi pi-fw pi-tag',
				routerLink: '/category'
			},
			{
				label: 'Device',
				icon: 'pi pi-fw pi-tags',
				routerLink: '/device'
			}
		];
	}
}
