import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import {DataService} from '../data.service';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles:Product[]=[];
  //performing dependecy injection method for data service object
  constructor(private dsObj:DataService){
        
  }

  ngOnInit(){
      //object initilization logic
      this.mobiles=this.dsObj.getMobilesData();
  }

}
