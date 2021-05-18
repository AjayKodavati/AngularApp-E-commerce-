import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userIdData;
  constructor(private act:ActivatedRoute,private faked:FakedataService) { }

  ngOnInit(): void {
    //getting id from url
    let id=this.act.snapshot.params.id;

    //getting the details of the current user
    this.faked.getUserIdData(id).subscribe(
      data=>{
        this.userIdData=data;
      },
      err=>{
        console.log("Error generated is ",err);
      }
    )
  }

}
