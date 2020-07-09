import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivableComponent } from '../base-component/activable.component';
import { Location } from 'src/app/models/location';

@Component({
    selector: 'location-picker',
    templateUrl: './location-picker.component.html',
    styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent extends ActivableComponent implements OnInit {
    @ViewChild('input') vc: ElementRef;

    ngOnInit() { }

    onActivating() {
        setTimeout(() => {
            this.vc.nativeElement.focus();
        }, 0);
    }
    
    @Input()
    set location(value: Location) {
        this._location = value;
    }

    _location: Location = new Location();

    get locationName(): string {
        let locationText = '';
        if (!!this._location) {
            locationText = this._location.city;
            locationText += ", ";
            locationText += this._location.region_name;
        }

        return locationText;
    }

}