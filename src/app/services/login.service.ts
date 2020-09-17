import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';
import {logger} from 'codelyzer/util/logger';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  customers = [];

  constructor(private customerService: CustomerService) {
  }

  findCustomer(data): boolean {
    // @ts-ignore
    // console.log(this.customerService.getAll());
    // tslint:disable-next-line:no-shadowed-variable
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    });
    // console.log(customers);
    // @ts-ignore
    for (const customer of this.customers) {
      // tslint:disable-next-line:triple-equals
      if (data.email == customer.email && data.password == customer.password) {
        localStorage.setItem('customerLogin', JSON.stringify(customer));
        return true;
      }
    }
    return false;
  }

  getCustomer(): any {
    return JSON.parse(localStorage.getItem('customerLogin'));
  }
}
