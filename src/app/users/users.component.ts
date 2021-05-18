import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
        this.router.navigateByUrl('users/'+id);
  }


}
