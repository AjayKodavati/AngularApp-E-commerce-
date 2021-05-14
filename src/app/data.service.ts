import { Injectable } from '@angular/core';
import { Product } from './models/product.models';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }
  private mobiles:Product[]=[

    {
      productTitle:"Apple iPhone 12 Mini",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/71tT8J5cKuL._AC_UY327_QL65_.jpg"
    },
    {
    productTitle:"Apple iPhone 12 Pro",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore",
    productImage:"https://m.media-amazon.com/images/I/71xkMA+gvYL._AC_UY327_QL65_.jpg"
    },
    
    {
    productTitle:"Apple iPhone 11",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY327_QL65_.jpg"
    },
    
    {
    productTitle:"Samsung Galaxy M31",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
    },

    {
      productTitle:"Redmi 9A",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY327_FMwebp_QL65_.jpg"
    },

    {
      productTitle:"Redmi 9",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY327_FMwebp_QL65_.jpg"
    },
  ];

  getMobilesData():Product[]{
    return this.mobiles;
  }

}