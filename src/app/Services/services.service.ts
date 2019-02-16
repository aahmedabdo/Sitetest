import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Global } from '../../Global/GlobalUrl'

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  GlobalUrl = Global.urls.GlobalUrl;

  //Url
  UsersGetAllUrl = 'api/users';
  UserGetOneUrl = 'api/users/';
  UserInsertUrl = 'api/users';
  UserUpdateUrl = 'api/users/';
  LoginUrl = 'api/login';
  UserDeleteUrl = 'api/users/'
  RegisterUrl = 'api/register';

  constructor(private http: HttpClient) { }

  //List Users
  GetAllUsers(PageNumber: number) {
    return this.http.get(this.GlobalUrl + this.UsersGetAllUrl + '?page=' + PageNumber);
  }
  GetOneUser(User_Id: number) {
    return this.http.get(this.GlobalUrl + this.UserGetOneUrl + User_Id);
  }
  InsertNewUser(user) {
    return this.http.post(this.GlobalUrl + this.UserInsertUrl, user)
  }
  UpdateUser(User_Id, user) {
    return this.http.put(this.GlobalUrl + this.UserUpdateUrl + User_Id, user)
  }
  DeleteUser(User_Id: number) {
    return this.http.delete(this.GlobalUrl + this.UserDeleteUrl + User_Id);
  }
  //login service
  LoginUser(Login) {
    return this.http.post(this.GlobalUrl + this.LoginUrl, Login)
  }
  //login service
  RegisterUser(Register) {
    return this.http.post(this.GlobalUrl + this.RegisterUrl, Register)
  }
}