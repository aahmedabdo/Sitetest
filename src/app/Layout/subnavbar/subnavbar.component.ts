import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {
  //variable
  form: FormGroup;
  User: any = {};
  isRetiveData: boolean = false;
  submitted: boolean = false;
  isClickSave: boolean = false;

  constructor(private UserService: ServicesService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
    })
  }
  get f() { return this.form.controls; }
  closeModale() {
    this.User = {};
    this.isRetiveData = false;
  }
  //function create New user
  InsertNewUser() {
    //check is form valid
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }
    this.isClickSave = true;
    this.UserService.InsertNewUser(this.User).subscribe((Response: any) => {
      if (Response.id != '') {
        Swal.fire(
          'Good job!',
          'create User' + ' ' + Response.name + ' ' + 'successfully',
          'success'
        )
        this.User = {};
        this.isClickSave = false;
      } else {
        Swal.fire('user is not create!');
        this.isClickSave = false;
      }
    },
      error => {
        Swal.fire('user is not create!');
        this.isClickSave = false;
      })
  }
}