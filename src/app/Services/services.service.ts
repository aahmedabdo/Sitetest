import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Global} from '../../Global/GlobalUrl'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  GlobalUrl=Global.urls.GlobalUrl;

  //Groups Url
  UsersGetAllUrl = '/api/users?page=2';
  GroupsGetOneUrl = 'api/Security/GroupsController/GetOne/';
  GroupsInsertUpdateDeleteUrl = 'api/Security/GroupsController/Post';


  constructor(private http: HttpClient) { }
  
  //List Users
  GetAllUsers() {
    return this.http.get(this.GlobalUrl + this.UsersGetAllUrl);
  }
  GetOneGroups(Role_id: number) {
    return this.http.get(this.GlobalUrl + this.GroupsGetOneUrl + Role_id);
  }
  InsertGroups(Group) {
    return this.http.post(this.GlobalUrl + this.GroupsInsertUpdateDeleteUrl, Group)
  }
  DeleteGroups(Group) {
    return this.http.post(this.GlobalUrl + this.GroupsInsertUpdateDeleteUrl, Group);
  }
  UpdateGroups(Group) {
    return this.http.post(this.GlobalUrl + this.GroupsInsertUpdateDeleteUrl, Group)
  }

}