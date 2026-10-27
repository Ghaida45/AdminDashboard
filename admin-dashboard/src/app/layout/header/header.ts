import { Component, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faMagnifyingGlass, faCircleUser, faGear, faBell, faBars, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { SidenavState } from '../../services/sidenav-state';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';

@Component({
  imports: [FontAwesomeModule, TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',

})
export class Header {
  private router = inject(Router);

  pageTitle = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.currentTitle())
    ),
    { initialValue: '' },
  )

  private currentTitle(): string {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.title ?? '';
  }

  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faCircleUser = faCircleUser;
  faGear = faGear;
  faBell = faBell;
  faBars = faBars;
  faLanguage = faLanguage;

  sidenav = inject(SidenavState);
  scrolled = input(false);

  language = inject(LanguageService);
}
