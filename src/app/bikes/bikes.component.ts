import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import {BikesdataService} from '../bikesdata.service'
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{

  bikes:Product[]=[];
  //dependency injection logic
  constructor(private dsObj:BikesdataService){

  }
  
  //object initilization logic
  ngOnInit(){
    this.bikes=this.dsObj.getBikesData()
  }


}
