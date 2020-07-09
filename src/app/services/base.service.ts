import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { join } from '@fireflysemantics/join';

export abstract class BaseService<T> {

    private getEndpoint(additionalParameter?: string): string {
        var endPoint = join(environment.api.endpoint, this.path, additionalParameter ?? '');

        console.log(endPoint);

        return endPoint;
    }

    constructor(protected httpClient: HttpClient, private path: string) { }

    protected getEntity<TEntity>(subPath: string): Promise<TEntity> {
        return this.httpClient
            .get<TEntity>(this.getEndpoint(subPath))
            .toPromise();
    }

    protected getItem(id: string): Promise<T> {
        return this.httpClient
            .get<T>(this.getEndpoint(id))
            .toPromise();
    }

    protected getItems(): Promise<T[]> {
        console.log(this.getEndpoint());
        return this.httpClient
            .get<T[]>(this.getEndpoint())
            .toPromise();
    }

    protected post(item: T): Promise<T> {
        return this.httpClient
            .post<T>(this.getEndpoint(), item)
            .toPromise();
    }

    protected postToPath<TEntity>(item: T, path: string): Promise<TEntity> {
        return this.httpClient
            .post<TEntity>(this.getEndpoint(path), item)
            .toPromise();
    }

    protected put(item: T, id?: string): Promise<T> {
        return this.httpClient
            .put<T>(this.getEndpoint(id), item)
            .toPromise();
    }

    protected delete(id: string) {
        return this.httpClient
            .delete(this.getEndpoint(id))
            .toPromise();
    }
}