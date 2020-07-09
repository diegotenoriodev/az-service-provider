import { Component, Input, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/models/serviceprovider';

@Component({
    selector: 'service-provider-cards',
    templateUrl: './service-provider-cards.component.html',
    styleUrls: [ './service-provider-cards.component.scss' ]
})

export class ServiceProviderCardComponent {

    @Input()
    serviceProviders: ServiceProvider[] = [];

    @Input()
    title: string;

}