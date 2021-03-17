import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUnits() {
    return this.http.get('https://age-of-empires-2-api.herokuapp.com/api/v1/units');

  }
}
