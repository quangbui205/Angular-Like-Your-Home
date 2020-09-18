import { Component, OnInit } from '@angular/core';
import {IHouse} from '../../interfaces/ihouse';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listHouse: IHouse[] = [];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.getListHouse();
  }

  getListHouse()
  {
    this.houseService.getAllHouse().subscribe(
      data => {this.listHouse = data; }
    );
  }

}
