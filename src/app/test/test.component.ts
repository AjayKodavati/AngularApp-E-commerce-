import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts.models';
import {RemotedataService} from '../remotedata.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  users:any;
  postData:Posts[];
  //creating dependency service object
  constructor(private remdataObj:RemotedataService) { 

  }

  ngOnInit(): void {
    /*this.remdataObj.getPostsData().subscribe(
      data=>{
        this.postData=data;
      },
      err=>{
        console.log("err generated is",err);
      }*/

      this.remdataObj.getUsersData().subscribe(
        data=>{
          this.users=data;
          console.log(this.users);
        },
        err=>{
          console.log("err generated is",err);
        }
      );
    
  }

}
