import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  //to receive data from parent as input
  @Input() productObj:Product

  //creating custom event
  @Output() myEvent=new EventEmitter()

  sendProductDetailsToParent(productTitle){
     //emittdata to parent
     this.myEvent.emit(productTitle);
  }
}
