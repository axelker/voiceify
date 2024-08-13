import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'voiceify-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public items: MenuItem[] | undefined;
  public activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
            { label: 'Voice', icon: 'pi pi-fw pi-microphone', routerLink: 'voice' },
            { label: 'About', icon: 'pi pi-fw pi-file',routerLink: 'about' },
        ];
        this.activeItem = this.items[0];
    }
}
