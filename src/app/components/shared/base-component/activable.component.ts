import { Output, Input, EventEmitter } from '@angular/core';

export abstract class ActivableComponent {
    
    _active: boolean = false;
    @Output() activeChange = new EventEmitter<boolean>();

    @Input()
    set active(value: boolean) {
        this._active = value;

        if (this._active) {
            this.onActivating();
        }
    }
    
    toggleActive() {
        this._active = !this._active;
        this.activeChange.emit(this._active);
    }

    preventDefault(e) {
        e.stopPropagation();
    }

    onActivating() {

    }
}