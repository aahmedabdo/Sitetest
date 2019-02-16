import { Component } from '@angular/core';
import { LookupService } from './Services/lookup-service.service';
import { PlatformLocation,Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn: boolean;
constructor(private lookupLogin: LookupService, location: PlatformLocation,
  locat: Location,private LoginRout: Router){
  this.lookupLogin.isUserLoggedIn.subscribe(value => {
    this.isUserLoggedIn = value
  });
  location.onPopState(() => {
    if (locat.path() == '') {
      this.lookupLogin.isUserLoggedIn.next(false);
    }
    if (locat.path() == '/sign-in') {
      this.LoginRout.navigate(['/sign-in']);
      this.lookupLogin.isUserLoggedIn.next(false);
    }
  });
  
  if (locat.path() == ''){
 this.lookupLogin.isUserLoggedIn.next(false);
  }
  else{
  this.lookupLogin.isUserLoggedIn.next(true);
  }
}

}
