import { Injectable } from '@angular/core';
import { Product } from './models/product.models';

@Injectable({
  providedIn: 'root'
})
export class LatopsdataService {

  constructor() { }
  private laptops:Product[]=[

    {
      productTitle:"Apple iPhone 12 Mini",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/41Y2Vs8NgSL.jpg"
    },
    {
    productTitle:"Apple iPhone 12 Pro",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore",
    productImage:"https://m.media-amazon.com/images/I/41HiLejNULL.jpg"
    },
    
    {
    productTitle:"Apple iPhone 11",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://m.media-amazon.com/images/I/41l7S5hlRsL.jpg"
    },
    
    {
    productTitle:"Samsung Galaxy M31",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://m.media-amazon.com/images/I/41Y2Vs8NgSL.jpg"
    },

    {
      productTitle:"Redmi 9A",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/41fEHCtat0L.jpg"
    },
  ];

  getlaptopsData():Product[]{
    return this.laptops;
  }

}
