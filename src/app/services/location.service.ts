import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpServiceService } from './ip-service.service';
import { BaseService } from './base.service';

@Injectable() 
export class LocationService extends BaseService<Location> {

    constructor(private http: HttpClient, 
        private ipService: IpServiceService) {
            super(http, 'location');
         }

    getLocation() {
        return this.ipService
            .getIPAddress()
            .then(
                r => this.getItem(r.ip)
            );
    }
}