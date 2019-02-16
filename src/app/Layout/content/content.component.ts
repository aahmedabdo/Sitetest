import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  //variable
  toggle = true;
  isRetiveData: boolean;
  Users: any = [];
  User: any = {};
  FullName: string;
  Photo: string;
  User_Id: number = 0;
  form: FormGroup;
  submitted: boolean = false;
  isLoadingMore: boolean = false;
  vUsers: any = [];
  LoadId: number = 1;
  IsMyModal: string;
  isClickUpdate: boolean = false;

  constructor(private UserService: ServicesService, private fb: FormBuilder,
    private ngxService: NgxUiLoaderService) {
    this.GetAllUsers();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
    })
  }
  get f() { return this.form.controls; }

  //Function
  //Get All Users - page one
  GetAllUsers() {
    this.ngxService.start();
    this.UserService.GetAllUsers(1).subscribe(Response => {
      this.Users = Response;
      this.ngxService.stop();
    },
      (error: any) => {
        this.ngxService.stop();
      });
  }
  //function show user in another tab
  ShowUser(User: any) {
    if (User.id > 0) {
      this.isRetiveData = true;
      this.FullName = User.first_name + ' ' + User.last_name;
      this.Photo = User.avatar;
      this.User_Id = User.id;
    }
  }
  // show user in popup for edit myModal
  ShowEditUser(id: number) {
    this.isRetiveData = true;
    this.UserService.GetOneUser(id).subscribe(Response => {
      this.Users = Response
      this.User = this.Users.data
      this.User.name = this.User.first_name + ' ' + this.User.last_name;
      this.User.job = 'leader';
    }, error => {
      if (error.status = '404')
        Swal.fire('user is not a found');
    });
  }
  //update user
  UpdateUser() {
    //check is form valid
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }
    this.isClickUpdate = true;
    this.UserService.UpdateUser(this.User_Id, this.User).subscribe((Response: any) => {
      Swal.fire(
        'Good job!',
        'Update User' + ' ' + Response.name + ' ' + 'successfully',
        'success'
      )
      this.User = {};
      this.isClickUpdate = false;
    },
      error => {
        Swal.fire('user is not Updated!');
        this.isClickUpdate = false;
      })
  }
  //load more data - more page
  LoadMore() {
    this.isLoadingMore = true;
    this.LoadId = this.LoadId + 1;
    this.UserService.GetAllUsers(this.LoadId).subscribe(Response => {
      this.vUsers = Response;
      this.vUsers.data.forEach(item => {
        this.Users.data.push(item);
      });
      //this.Users = Response
      this.isLoadingMore = false;
    });
  }
  //for close tap single user
  CloseSingleUser() {
    this.User = {};
    this.isRetiveData = false;
  }
  //delete user by user id
  DeleteUser(User_Id) {
    let deleteUsers = [];
    this.UserService.DeleteUser(User_Id).subscribe((Response: any) => {
      this.Users.data.forEach(item => {
        if (item.id != User_Id)
          deleteUsers.push(item);
      });
      this.Users = [];
      this.Users.data = deleteUsers;
      this.isRetiveData = false;
      Swal.fire(
        'Deleted!',
        'Your user has been deleted.',
        'success'
      )
    },
      error => {
        Swal.fire(error.message);
      })
  }
}