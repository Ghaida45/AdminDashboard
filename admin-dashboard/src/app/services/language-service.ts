import { DOCUMENT, effect, inject, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageService {
    private t = inject(TranslateService);
    private d = inject(DOCUMENT);

    readonly lang = this.t.currentLang;

    constructor() {
        let saved: string | null = null;
        try { saved = localStorage.getItem('lang'); } catch {}
        if (saved === 'ar' || saved === 'en') this.t.use(saved);

        effect(() => {
            const lang = this.lang() ?? 'en';
            this.d.documentElement.lang = lang;
            this.d.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            try { localStorage.setItem('lang', lang); } catch {}
        });
    }

    toggle() {
        this.t.use(this.lang() === 'ar' ? 'en' : 'ar');
    }
}
