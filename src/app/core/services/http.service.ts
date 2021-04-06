import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(
    private httpClient: HttpClient
  ) {}

  postData(api:any,data:any){
    return this.httpClient.post(environment.baseUrl+api, data)
  } 
}
