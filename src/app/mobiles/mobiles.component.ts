import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent  {

  products:Product[]=[

    {
      productTitle:"Triumph Rocket 3",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://media.zigcdn.com/media/model/2020/Sep/2020-triumph-rocket-3-gt-right-side-view_600x400.jpg"
    },
    {
    productTitle:"Yamaha MT 15",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore",
    productImage:"https://media.zigcdn.com/media/model/2020/Feb/mt-15-bs6_600x400.jpg"
    },
    
    {
    productTitle:"Kawasaki Z900",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://media.zigcdn.com/media/model/2020/Sep/2021-kawasaki-z-900-right-side-view_600x400.jpg"
    },
    
    {
    productTitle:"Harley Davidson Iron 883",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
    productImage:"https://media.zigcdn.com/media/model/2019/Sep/iron-883-right-side-view_600x400.jpg"
    },

    {
      productTitle:"Daytona 675R",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://i.pinimg.com/originals/87/8c/a6/878ca65b02c1cb5ba909b5957deacca6.jpg"
    },

    {
      productTitle:"Redmi 9",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat explicabo corporis eum omnis ad maiores dolore,",
      productImage:"https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY327_FMwebp_QL65_.jpg"
    },
  ];

}
