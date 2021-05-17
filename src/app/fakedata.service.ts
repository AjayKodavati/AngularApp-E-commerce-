import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { 

  }
  getEmpDetails():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}