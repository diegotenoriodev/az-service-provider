import { Injectable } from '@angular/core';  
import { HttpClient  } from '@angular/common/http';  
import { Ip } from '../models/location';
  
@Injectable({  
  providedIn: 'root'  
})  
export class IpServiceService  {  
  
  constructor(private http:HttpClient) { }

  public getIPAddress() : Promise<Ip>
  {  
    return this.http
        .get<Ip>("https://api.ipify.org/?format=json")
        .toPromise();  
  }  
} 