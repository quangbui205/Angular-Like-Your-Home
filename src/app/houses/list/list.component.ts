import { Component, OnInit } from '@angular/core';
import {IHouse} from '../../interfaces/ihouse';
import {HouseService} from '../../services/house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listHouse: IHouse[] = [];

  constructor(private houseService: HouseService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListHouse();
  }

  // tslint:disable-next-line:typedef
  detail()
  {
    return this.router.navigate(['home/detail']);
  }

  // tslint:disable-next-line:typedef
  getListHouse()
  {
    this.houseService.getAllHouse().subscribe(
      data => {this.listHouse = data; }
    );
  }

}
