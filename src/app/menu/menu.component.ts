import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";

interface MenuItem {
    path: string;
    label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MatListModule],
  template: `
    <ng-container *ngFor="let item of menuItems">
      <a mat-list-item [href]="item.path">{{ item.label }}</a>
    </ng-container>
    `,
  styles: [],
})

export class MenuComponent {
  menuItems: Array<MenuItem> = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/categories',
      label: 'Categories',
    },
    {
      path: '/suppliers',
      label: 'Suppliers',
    },
  ];
}
