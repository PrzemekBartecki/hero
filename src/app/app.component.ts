
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Subscriber } from 'rxjs';
import { removeListener } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  units;
  quantity;
  unitsList = false;


  constructor(private http: AppService) {}

  ngOnInit() {
    this.http.getUnits().subscribe(data => {
      this.units = data;
      console.log('zaczynamy', this.units.units);
    });
  }

  materialsQuantity(e) {

    e.preventDefault();
    const inputValue = document.querySelectorAll('input');

    const matrialsQuantityOb = {
     wood: +(inputValue[0].value),
     food: +(inputValue[1].value),
     stone: +(inputValue[2].value),
     gold: +(inputValue[3].value)
   };

    this.unitsList = true;
    return this.quantity = matrialsQuantityOb;

  }

  unitQuantity(el) {
    console.log(this.quantity);
    console.log('to jest el', el);

    const w = Math.floor(this.quantity.wood / el.Wood);
    const f = Math.floor(this.quantity.food / el.Food);
    const s = Math.floor(this.quantity.stone / el.Stone);
    const g = Math.floor(this.quantity.gold / el.Gold);
    console.log ('wood', w, 'food', f, 'stone', s, 'gold', g);

    const materialsArray = [w, f, s, g];
    const tab = materialsArray.filter(el => el )
    .sort( (a, b) =>  a - b);

    console.log('odfiltrowana tablica', tab);
    console.log('liczba jednostek', tab[0]);

    return tab[0];



  }
}

