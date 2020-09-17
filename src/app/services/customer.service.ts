import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url = 'http://127.0.0.1:8000/api/customers';
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  register(customer){
    return this.http.post(this.url, customer);
  }
}
