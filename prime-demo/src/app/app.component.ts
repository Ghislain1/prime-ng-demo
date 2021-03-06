import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prime-demo';

  items: MenuItem[];

  activeItem: MenuItem;

  constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { label: 'Car', icon: 'pi pi-fw pi-calendar', routerLink: ['/car'] },
      { label: 'idrice-contact', icon: 'pi pi-fw pi-android', routerLink: ['/contact'] },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];
  }

  onClick(event?: any): void {
    const dsd = JSON.stringify(event);
    console.log('ONCLIC *********' + dsd);
    this.activeItem = event.item;
  }
}
