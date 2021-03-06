import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Posts } from '../models/posts.models';
import {RemotedataService} from '../remotedata.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
 emp:any[]=[];
  //creating dependency service object
  constructor(private empObj:FakedataService,private router:Router) { 

  }

  ngOnInit(): void {
    /*this.remdataObj.getPostsData().subscribe(
      data=>{
        this.postData=data;
      },
      err=>{
        console.log("err generated is",err);
      }*/

      this.empObj.getEmpDetails().subscribe(
        data=>{
          this.emp=data;
        },
        err=>{
          console.log("err generated is",err);
        }
      );
    
  }
  slectedID(id){
        this.router.navigateByUrl('test/'+id);
  }

}
