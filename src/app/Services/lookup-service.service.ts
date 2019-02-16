import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
//sharing data 
public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

constructor() { }
}
