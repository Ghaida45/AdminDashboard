import { Service, signal } from '@angular/core';

@Service()
export class SidenavState {
    readonly isOpen = signal(false);

    toggle() {
        this.isOpen.update(open => !open);
    }
    
    close() {
        this.isOpen.set(false);
    }
}
