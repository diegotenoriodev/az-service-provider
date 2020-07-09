import { BaseEntity } from './baseEntity';
import { ServiceProviderType } from './serviceprovidertype';

export class ServiceProvider extends BaseEntity {
    serviceType?: ServiceProviderType;
    name: string;
    description: string;
    phoneNumber: string;
    averageRate: number;
    reviewCount: number;
    mainImagePath: string;
}