import { ServiceProviderServce } from '../services/service-providers.service';
import { ServiceProvider } from './serviceprovider';

export class ServiceProviderType {
    name: string;
    icon: string;
    path: string;

    serviceProviders: ServiceProvider[];
}