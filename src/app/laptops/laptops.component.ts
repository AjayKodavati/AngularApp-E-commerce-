import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import {LatopsdataService} from '../latopsdata.service'
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops:Product[]=[];

  //implimenting dependency injection
  constructor(private dsObj:LatopsdataService){

  }

  //object initilzing logic
  ngOnInit() {
    this.laptops=this.dsObj.getlaptopsData();
  }
}
