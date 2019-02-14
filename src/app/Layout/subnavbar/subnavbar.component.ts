import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {
  form: FormGroup;
  User: any = {};
  isRetiveData: boolean = false;

  constructor(private UserService: ServicesService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Jobtitle: new FormControl('', [Validators.required]),
    })
  }
  get f() { return this.form.controls; }
  closeModale(){
    this.User={};
    this.isRetiveData = false;
  }

}
