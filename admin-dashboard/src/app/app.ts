import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { SideNav } from './layout/side-nav/side-nav';
import { LanguageService } from './services/language-service';

@Component({
  imports: [RouterOutlet, Header, Footer, SideNav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class App {
  protected readonly title = signal('admin-dashboard');
  private language = inject(LanguageService);

  scrolled = signal(false);
  onScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
}
