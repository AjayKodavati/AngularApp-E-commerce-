import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent  {

  products:Product[]=[

    {
      productTitle:"Triumph Rocket 3",
      description:"The Triumph Rocket 3 R was launched in December 2019 and the first batch of 40 units of the motorcycle are sold out. The all-new Triumph Rocket 3 R costs Rs 19.35 lakh and is available in two colours: red and black.",
      productImage:"https://media.zigcdn.com/media/model/2020/Sep/2020-triumph-rocket-3-gt-right-side-view_600x400.jpg"
    },
    {
    productTitle:"Yamaha MT 15",
    description:"On the Yamaha MT-15, the 155cc single-cylinder liquid-cooled 4-valve motor (which it shares with the R15 BS6) makes 18.6PS and 14.1Nm. Engine outputs compared to the BS4 version are lower -- 0.7PS and 0.6Nm to be precise",
    productImage:"https://media.zigcdn.com/media/model/2020/Feb/mt-15-bs6_600x400.jpg"
    },
    
    {
    productTitle:"Kawasaki Z900",
    description:"Kawasaki has launched the Z900 BS6 in India at Rs 7.99 lakh (ex-showroom). It is the same price as the BS4 Kawasaki Z900 Special Edition and just Rs 29,000 more than the older standard Z900.In terms of updates.",
    productImage:"https://media.zigcdn.com/media/model/2020/Sep/2021-kawasaki-z-900-right-side-view_600x400.jpg"
    },
    
    {
    productTitle:"Harley Davidson Iron 883",
    description:"Hero MotoCorp has set up a new vertical for the Harley-Davidson business in India which will be led by Ravi Avalur, former managing director of Ducati India. Hero has also on-boarded 11 existing dealerships across the country.",
    productImage:"https://media.zigcdn.com/media/model/2019/Sep/iron-883-right-side-view_600x400.jpg"
    },

    {
      productTitle:"Daytona 675R",
      description:"The Daytona 675R is the only sport bike in the Triumph range, but that doesn’t mean it is a halfhearted effort just to be in the numbers game. This 675cc bike is a lethal machine that replaced the original Dayton 650 in 2008.",
      productImage:"https://i.pinimg.com/originals/87/8c/a6/878ca65b02c1cb5ba909b5957deacca6.jpg"
    },

    {
      productTitle:"Triumph Bonneville Bobber",
      description:"Triumph recently gave its entire Bonneville range mechanical and cosmetic updates for 2021. The Bobber, for instance, comes with new colours, a new chunky 16-inch front wheel, a larger fuel tank, and better cycle parts.",
      productImage:"https://media.zigcdn.com/media/model/2021/Feb/triumph-bonneville-bobber-right-side-view_600x400.jpg"
    },
  ];
  

}
