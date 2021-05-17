import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Posts } from './models/posts.models';

@Injectable({
  providedIn: 'root'
})
export class RemotedataService {

  //injecting http client object
  constructor(private http:HttpClient) {

  }

  getPostsData():Observable<Posts[]>{
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUsersData():Observable<any>{
    return this.http.get<any>('https://reqres.in/api/unknown')
  }
}
