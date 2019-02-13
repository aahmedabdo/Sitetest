import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  toggle = true;
Users:any=[];
  constructor(private UserService: ServicesService) {
    this.GetAllUsers();
   }
  //Function
  //Get All Users
  GetAllUsers() {
    this.UserService.GetAllUsers().subscribe(Response => {
      this.Users = Response
    });
  }
  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }
  ngOnInit() {
  }

}
