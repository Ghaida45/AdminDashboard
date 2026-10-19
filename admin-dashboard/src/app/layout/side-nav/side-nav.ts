import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { SidenavState } from '../../services/sidenav-state';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-side-nav',
  styleUrl: './side-nav.css',
  templateUrl: './side-nav.html',
})
export class SideNav {
  faX = faX;

  sidenav = inject(SidenavState);
}
