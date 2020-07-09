import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceProviderType } from 'src/app/models/serviceprovidertype';
import { Location } from 'src/app/models/location';

@Component({
    selector: 'search-box',
    templateUrl: './search-box.component.html',
    styleUrls: [ './search-box.component.scss' ]
})
export class SearchBoxComponent {
    activeLocationPicker: boolean = false;

    @Input()
    set location(value: Location) {
        this._location = value;
    }

    @Output()
    locationEvenEmitter = new EventEmitter<Location>();

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

    @Input()
    set serviceProviderTypes(value: ServiceProviderType[]) {
        this._serviceProviderTypes = value;
    }

    get serviceProviderTypes(): ServiceProviderType[] {
        return this._serviceProviderTypes;
    }

    private _serviceProviderTypes: ServiceProviderType[] = [];

    openLocationPicker() {
        this.activeLocationPicker = true;
    }

    selectLocation() {
        this.locationEvenEmitter.emit(this._location);
    }
}