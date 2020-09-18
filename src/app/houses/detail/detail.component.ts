import { Component, OnInit } from '@angular/core';
import {IHouse} from '../../interfaces/ihouse';
import {HouseService} from '../../services/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {ICustomer} from '../../interfaces/icustomer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  house: IHouse;
  customer: ICustomer;
  constructor(private houseService: HouseService,
              private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService) {

  }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getHouse();
  }

  // tslint:disable-next-line:typedef
  getHouse()
  {
    this.houseService.getHouseId(this.id).subscribe(data => {
      this.house = data;
      console.log(this.house);
      this.customerService.getCustomerById(this.house.customer_id).subscribe(result => {
        this.customer = result;
        console.log(this.customer);
      });
    });

  }

}
