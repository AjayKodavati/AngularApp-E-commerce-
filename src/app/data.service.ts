import { Injectable } from '@angular/core';
import { Product } from './models/product.models';
import {HttpClient} from  '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class DataService {
 
  //inject httpclient service object
  constructor(private httpObj:HttpClient) { }
  

  getMobilesData():Observable<Product[]>{
     return this.httpObj.get<Product[]>("http://localhost:3000/mobiles")
  }

}
