import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public url = 'http://127.0.0.1:8000/api/customers';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  register(customer) {
    return this.http.post(this.url, customer);
  }

  // tslint:disable-next-line:typedef
  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url);
  }

  // tslint:disable-next-line:typedef
  getCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.url + '/' + id);
  }
}
