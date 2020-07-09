import { BaseService } from './base.service';
import { ServiceProvider } from '../models/serviceprovider';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceProviderType } from '../models/serviceprovidertype';

@Injectable() 
export class ServiceProviderServce extends BaseService<ServiceProvider> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'serviceprovider');
    }

    get() {
        return this.getItems();
    }

    getTypes() {
        return super.getEntity<ServiceProviderType[]>('types');
    }

    getTopRatedTypes() {
        return super.getEntity<ServiceProviderType[]>('GetTopCategories/ontario');
    }
}