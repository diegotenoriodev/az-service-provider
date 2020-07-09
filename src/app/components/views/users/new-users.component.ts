import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class DealService {
  private privateDealsUrl = 'http://localhost:3001/api/deals/private';

  constructor(
    private authService: AuthService
  ) { }

  // Implement a method to get the private deals
  getPrivateDeals() {
    // return this.http
    //   .get<Deal[]>(this.privateDealsUrl, {
    //     headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    //   })
    //   .pipe(
    //     catchError(this.handleError)
    //   );
  }
}