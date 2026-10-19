import { Component, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faMagnifyingGlass, faCircleUser, faGear, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavState } from '../../services/sidenav-state';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',

})
export class Header {
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faCircleUser = faCircleUser;
  faGear = faGear;
  faBell = faBell;
  faBars = faBars;

  sidenav = inject(SidenavState);
  scrolled = input(false);
}
