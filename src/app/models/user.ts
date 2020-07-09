import { Client } from './client';
import { ProvidedService } from './providedService';
import { BaseEntity } from './baseEntity';

export class User extends BaseEntity {
    email: string;
    externalId: string;
    client: Client;
    lastLogin: Date;
    providedServices: ProvidedService[];
    imagePath: string;
}