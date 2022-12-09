import { Component } from '@angular/core';
import {BasketModel} from "../../models/basket";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  baskets:BasketModel[]=[];
  total:number=0;

  getBaskets(event:any){
    this.baskets=event.data;

  }


}
