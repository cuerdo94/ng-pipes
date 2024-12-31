import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',

})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        badge: '9',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/home',
          },
          {
            label: 'About',
            icon: 'pi pi-info-circle',
            routerLink: '/about',
          },
          {
            label: 'Contact',
            icon: 'pi pi-user',
            routerLink: '/contact',
          },
        ],
      },
    ];
  }
}
