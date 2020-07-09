import { Component, Input } from '@angular/core';
import { ServiceProviderType } from 'src/app/models/serviceprovidertype';

@Component({
    selector: 'categories-menu',
    templateUrl: './categories-menu.component.html',
    styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent {

    @Input()
    set serviceProviderTypes(value: ServiceProviderType[]) {
        this._serviceProviderTypes = value;
    }

    get serviceProviderTypes(): ServiceProviderType[] {
        return this._serviceProviderTypes;
    }

    protected _serviceProviderTypes: ServiceProviderType[] = [];
}