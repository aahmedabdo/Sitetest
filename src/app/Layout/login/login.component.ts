import { Component, OnInit } from '@angular/core';
import { LookupService } from '../../Services/lookup-service.service';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //varible
  isUserLoggedIn: boolean;
  form: FormGroup;
  submitted: boolean = false;
  Login: any = {};
  isNew: boolean = false;

  constructor(private UserService: ServicesService, private lookupLogin: LookupService,
    private LoginRout: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }
  get f() { return this.form.controls; }

  //function login user by email and password
  onLogin() {
    //check is form valid
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }
    this.UserService.LoginUser(this.Login).subscribe((Response: any) => {
      if (Response.token != '') {
        this.LoginRout.navigate(['/Content']);
        //set varible isUserLoggedIn = true for show header and navbar after login 
        this.lookupLogin.isUserLoggedIn.next(true);
      } else {
        Swal.fire('Email or password is not a valid');
      }
    },
      error => {
        Swal.fire('Email or password is not a valid');
      })
  }
  newUser() {
    this.isNew = true;
  }

  onRegister() {
    //check is form valid
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }
    this.UserService.RegisterUser(this.Login).subscribe((Response: any) => {
      if (Response.token != '') {
        this.isNew = false;
        Swal.fire(
          'Good job!',
          'User Created successfully',
          'success'
        )
      } else {
        Swal.fire('user is not create!');
      }
    },
      error => {
        Swal.fire('user is not create!');
      })
  }
}