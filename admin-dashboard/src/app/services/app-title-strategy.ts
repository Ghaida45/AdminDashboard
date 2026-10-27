import { effect, inject, Service, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class AppTitleStrategy extends TitleStrategy {
    private title = inject(Title);
    private t = inject(TranslateService);
    private key = signal<string | undefined>(undefined);

    constructor() {
        super();
        effect(() => {
            this.t.currentLang();
            const key = this.key();
            if (key) {
                this.t.get(key).subscribe(text => this.title.setTitle(text));
            }
        });
    }

    updateTitle(snapshot: RouterStateSnapshot) {
        this.key.set(this.buildTitle(snapshot));
    }
}
