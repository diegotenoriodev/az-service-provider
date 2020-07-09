import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ServiceProvider } from 'src/app/models/serviceprovider';
import { ServiceProviderServce } from 'src/app/services/service-providers.service';
import { ServiceProviderType } from 'src/app/models/serviceprovidertype';
import { LocationService } from 'src/app/services/location.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    serviceProvidersTopTypes: ServiceProviderType[] = [];
    serviceProviderTypes: ServiceProviderType[] = [];
    location: Location;

    constructor(public authService: AuthService, 
        private serviceProviderService: ServiceProviderServce,
        private locationService: LocationService) {
    }

    ngOnInit() {
        this.serviceProviderService.getTopRatedTypes()
            .then(r => this.serviceProvidersTopTypes = r)
            .catch(e => alert(e));

        this.serviceProviderService.getTypes()
            .then(r => this.serviceProviderTypes = r)
            .catch(e => alert(e));

        if (!!localStorage.getItem('location')) {
            this.location = JSON.parse(localStorage.getItem('location'));
        } else {
            this.locationService.getLocation()
                .then(r => {
                    localStorage.setItem('location', JSON.stringify(r));
                    this.location = r;
                })
                .catch(e => alert(e));
        }
    }

  }