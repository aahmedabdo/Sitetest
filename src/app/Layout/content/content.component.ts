import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  toggle = true;
  isRetiveData: boolean = false;
  Users: any = [];
  User: any = {};
  FullName: string;
  Photo: string;
  User_Id: number = 0;
  form: FormGroup;

  constructor(private UserService: ServicesService, private fb: FormBuilder) {
    this.GetAllUsers();
  }
  ngOnInit() {
    this.form = this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Jobtitle: new FormControl('', [Validators.required]),
    })
  }
  get f() { return this.form.controls; }


  //Function
  //Get All Users
  GetAllUsers() {
    this.UserService.GetAllUsers().subscribe(Response => {
      this.Users = Response
    });
  }
  ShowUser(User: any) {
    if (User.id > 0) {
      this.isRetiveData = true;
      this.FullName = User.first_name + ' ' + User.last_name;
      this.Photo = User.avatar;
      this.User_Id = User.id;
    }
  }
  ShowEditUser(id: number) {
    this.isRetiveData = true;
    this.UserService.GetOneUser(id).subscribe(Response => {
      this.Users = Response
      this.User = this.Users.data
      this.User.Name = this.User.first_name + ' ' + this.User.last_name;
      this.User.Jobtitle = 'leader';
    });
  }
  CloseSingleUser() {
    this.User={};
    this.isRetiveData = false;
  }
  closeModale(){
    this.User={};
    this.GetAllUsers();
    this.isRetiveData = false;
  }

}
