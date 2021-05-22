import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.css']
})
export class ViewMobilesComponent implements OnInit {

  mobiles:Product[]=[];
  //performing dependecy injection method for data service object
  constructor(private dsObj:DataService){
        
  }

  ngOnInit(){
      //object initilization logic  
      this.dsObj.getMobilesData().subscribe(
        data=>{
          this.mobiles=data;
        },
        err=>{
          console.log("err geneated is",err);
        }
      );
  }
}
