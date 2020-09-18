import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHouse} from '../interfaces/ihouse';



@Injectable({
  providedIn: 'root'
})
export class HouseService {
  public url = 'http://127.0.0.1:8000/api/houses';

  constructor(private http: HttpClient ) { }

  getAllHouse(): Observable<IHouse[]>{
    return this.http.get<IHouse[]>(this.url);
  }
}
